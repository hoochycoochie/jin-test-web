import { useEffect } from "react";

export const useComponentDidMount = func => useEffect(func, []);