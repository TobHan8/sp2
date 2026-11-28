// This file types the API-Key from the environment file.
// This project is for educational purposes only. The Noroff API docs say that one key is enough for the entire application, regardless of which user is logged in.
// To simulate a real-world application, this project uses an environment file for the API-Key.
// When Vite bundles and compiles the project, the API-Key will still be exposed in code, but the core principle of hiding keys in environment files are kept.

interface ImportMetaEnv {
    readonly VITE_NOROFF_API_KEY: string;
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}