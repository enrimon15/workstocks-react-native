// middelware per redux promise middelware (per evitare warn: possible unhandled rejected promise)
import isPromise from "is-promise";

export default function errorMiddleware() {
    return next => action => {

        // se il payload dell'action non è una promise continua
        if (!isPromise(action.payload)) {
            return next(action);
        }

        // Dispatch dell'action iniziale aggiungendoci un catch
        return next(action).catch(error => {
            console.log('action promise error', error);
            return error;
        });
    };
}