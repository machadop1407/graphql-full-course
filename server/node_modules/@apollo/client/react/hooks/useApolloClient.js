import { invariant } from "../../utilities/globals/index.js";
import * as React from 'react';
import { getApolloContext } from "../context/index.js";
export function useApolloClient() {
    var client = React.useContext(getApolloContext()).client;
    __DEV__ ? invariant(client, 'No Apollo Client instance can be found. Please ensure that you ' +
        'have called `ApolloProvider` higher up in your tree.') : invariant(client, 33);
    return client;
}
//# sourceMappingURL=useApolloClient.js.map