// import fetch from "node-fetch";

export async function fetchReadme(url: string): Promise<string | null> {
  try {
    const res = await fetch(url);
    return res.ok ? res.text() : null;
  } catch (error) {
    console.error(`❌ Error al obtener ${url}:`, error);
    return null;
  }
}
