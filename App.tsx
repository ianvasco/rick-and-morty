import { SafeAreaProvider } from "react-native-safe-area-context";
import { Navigation } from "./src/navigation";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";

const App = () => {
  const cache = new InMemoryCache();

  const client = new ApolloClient({
    uri: "https://rickandmortyapi.com/graphql",
    cache,
    defaultOptions: { watchQuery: { fetchPolicy: "cache-and-network" } },
  });
  return (
    <SafeAreaProvider>
      <ApolloProvider client={client}>
        <Navigation />
      </ApolloProvider>
    </SafeAreaProvider>
  );
};

export default App;
