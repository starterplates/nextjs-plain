export const FALLBACK_LANGUAGE = "en";
export const AVAILABLE_LANGUAGES = ["en", "de"];

// Here every page with the required namespaces must be specified
// Namespaces must only be important once, so "common" for example is only needed in "/" and can be used on every sub page
// (e.g. "/[test]") here common is already available and does not need to be specified again
// [...] are dynamic routes, like in the app folder structure
export const NAMESPACE_ROUTES = {
    "/": ["common"],
    "/[test]": ["test"],
    "/[test]/welcome": ["welcome"],
}