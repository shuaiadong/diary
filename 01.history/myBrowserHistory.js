export default function  createBrowserHistory(props) {
    const globalHistory = window.history;
    let listener = [];
    let initialLocation = {
        state: globalHistory.state,
        pathname: window.location.pathname
    };


    function createHref() {
        return location.protocol + location.host + location.pathname + location.search + location.hash;
    }


    function setState(state) {
        Object.assign(history, state);
        history.length = globalHistory.length;
    }

    function push(path, state) {
        const action = 'PUSH';
        const location = {path, state};
        globalHistory.pushState(state, null, path);
        setState({action, location});
    }

    function replace(path, state) {
        const action = 'REPLACE';
        const location = {path, state};
        globalHistory.replaceState(state, null, path);
        setState({action, location});
    }


    function go(n) {
        globalHistory.go(n);
    }


    function goback() {
        go(-1);
    }
    function goForward() {
        go(1);
    }

    function listen(listerer) {
        listener.push(listener);
    }

    let isBlock;
    function block(prompt) {
        isBlock = prompt;
    }

    let history = {
        length: globalHistory.length,
        action: 'POP',
        location: initialLocation,
        createHref,
        push,
        replace,
        go,
        goBack,
        goForward,
        block,
        listen
    }
}