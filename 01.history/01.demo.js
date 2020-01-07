function createBrowserHistory (props) {
    globalHistory = window.history;

    function push(path, state) {
        globalHistory.pushState(state, null, path);
        setState({action: 'PUSH', state})
    }

    function replace(path, state) {
        globalHistory.replaceState(state, null, path);
        setState({action: 'REPLACE', state})

    }

    function go (n) {
        globalHistory.go(n);
    }

    function goBack() {
        go(-1);
    }
    function goForward() {
        go(1);
    }


    let history = {
        length: globalHistory.length,
        location,
        action: 'pop', // 'RELPACE' 'PUSH'
        createRef,

        push,
        replace,

        go,
        goBack,
        goForward,
        
        listen

    };
}