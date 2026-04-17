"use server";

import { redirect } from "next/navigation";
import {
  authenticateUser,
  registerUser,
  createSession,
  deleteSession,
} from "@/lib/auth";

export async function loginAction(
  _prevState: { error?: string } | undefined,
  formData: FormData
) {
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;
  const callbackUrl = (formData.get("callbackUrl") as string) || "/dashboard";

  if (!email || !password) {
    return { error: "Fyll i alla falt." };
  }

  const user = await authenticateUser(email, password);
  if (!user) {
    return { error: "Fel e-post eller losenord. Forsok igen." };
  }

  await createSession({
    userId: user.id,
    email: user.email,
    name: user.name,
    organization: user.organization,
  });

  redirect(callbackUrl);
}

export async function registerAction(
  _prevState: { error?: string } | undefined,
  formData: FormData
) {
  const firstName = formData.get("firstName") as string;
  const lastName = formData.get("lastName") as string;
  const organization = formData.get("organization") as string;
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  if (!firstName || !lastName || !email || !password) {
    return { error: "Fyll i alla obligatoriska falt." };
  }

  if (password.length < 6) {
    return { error: "Losenordet maste vara minst 6 tecken." };
  }

  const result = await registerUser({
    email,
    password,
    name: `${firstName} ${lastName}`,
    organization: organization || undefined,
  });

  if ("error" in result) {
    return { error: result.error };
  }

  await createSession({
    userId: result.user!.id,
    email: result.user!.email,
    name: result.user!.name,
    organization: result.user!.organization,
  });

  redirect("/dashboard");
}

export async function logoutAction() {
  await deleteSession();
  redirect("/");
}
