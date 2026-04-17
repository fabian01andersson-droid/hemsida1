import { SignJWT, jwtVerify } from "jose";
import { cookies } from "next/headers";

const SECRET = new TextEncoder().encode(
  process.env.AUTH_SECRET || "bridgetogrants-dev-secret-change-in-prod"
);

const COOKIE_NAME = "session";

export interface SessionPayload {
  userId: string;
  email: string;
  name: string;
  organization?: string;
  expiresAt: string;
}

// --- Demo users (replace with DB in production) ---
const DEMO_USERS = [
  {
    id: "1",
    email: "demo@bridgetogrants.se",
    password: "demo1234",
    name: "Johan Andersson",
    organization: "TechStart AB",
  },
  {
    id: "2",
    email: "test@test.se",
    password: "test1234",
    name: "Anna Svensson",
    organization: "GreenInnovation AB",
  },
];

export async function createSession(payload: Omit<SessionPayload, "expiresAt">) {
  const expiresAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000); // 7 days

  const token = await new SignJWT({ ...payload, expiresAt: expiresAt.toISOString() })
    .setProtectedHeader({ alg: "HS256" })
    .setExpirationTime("7d")
    .sign(SECRET);

  const cookieStore = await cookies();
  cookieStore.set(COOKIE_NAME, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    expires: expiresAt,
  });
}

export async function getSession(): Promise<SessionPayload | null> {
  const cookieStore = await cookies();
  const token = cookieStore.get(COOKIE_NAME)?.value;
  if (!token) return null;

  try {
    const { payload } = await jwtVerify(token, SECRET);
    return payload as unknown as SessionPayload;
  } catch {
    return null;
  }
}

export async function deleteSession() {
  const cookieStore = await cookies();
  cookieStore.delete(COOKIE_NAME);
}

export async function authenticateUser(email: string, password: string) {
  // Demo: find user by email + password. Replace with DB lookup + bcrypt in production.
  const user = DEMO_USERS.find(
    (u) => u.email.toLowerCase() === email.toLowerCase() && u.password === password
  );
  if (!user) return null;
  return { id: user.id, email: user.email, name: user.name, organization: user.organization };
}

export async function registerUser(data: {
  email: string;
  password: string;
  name: string;
  organization?: string;
}) {
  // Demo: check if email is already taken
  const exists = DEMO_USERS.find(
    (u) => u.email.toLowerCase() === data.email.toLowerCase()
  );
  if (exists) return { error: "E-postadressen ar redan registrerad." };

  // In production: hash password, insert into DB
  const newUser = {
    id: String(DEMO_USERS.length + 1),
    ...data,
    organization: data.organization || "",
  };
  DEMO_USERS.push(newUser);

  return {
    user: {
      id: newUser.id,
      email: newUser.email,
      name: newUser.name,
      organization: newUser.organization,
    },
  };
}
