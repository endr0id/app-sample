export const paths = {
  home: {
    path: "/",
    getHref: () => "/",
  },
  auth: {
    path: "/auth/login",
    // TODO: 今後、redirectToを考慮する
    getHref: () => "/auth/login",
  },
} as const;
