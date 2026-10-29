import { RouterProvider } from "react-router";
import { appRouter } from "./router/app.routes";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { FavoritesHeroProvider } from "./heroes/context/FavoritesHeroContext";

const queryClient = new QueryClient();

const HerooesApp = () => {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <FavoritesHeroProvider>

        <RouterProvider router={appRouter} />
        <ReactQueryDevtools initialIsOpen={false} />
        </FavoritesHeroProvider>
      </QueryClientProvider>
    </>
  );
};

export default HerooesApp;
