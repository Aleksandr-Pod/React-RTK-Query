import { configureStore } from '@reduxjs/toolkit';
// import { pokemonApi } from 'components/API/PokemonAPI';
import { myRecordsAPI } from 'components/API/MyRecords';

// export const store = configureStore({
//     reducer: {[pokemonApi.reducerPath]: pokemonApi.reducer},
//     middleware: (getDefaultMiddleware) =>
//         getDefaultMiddleware().concat(pokemonApi.middleware),
// });

export const store = configureStore({
    reducer: { [myRecordsAPI.reducerPath]: myRecordsAPI.reducer },
        middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(myRecordsAPI.middleware),
})