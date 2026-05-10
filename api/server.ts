export const config = {
  runtime: "edge",
};

export default async (request: Request) => {
  // @ts-ignore - Dynamic import to access the internal server handler
  const { default: handler } = await import("@tanstack/react-start/server-entry");
  
  // The handler is an object with a .fetch() method
  return handler.fetch(request);
};
