let currentClock;

function searchBackend(){
    console.log("request sent to backend")
}

function debouncedSearchBackend(){
    clearInterval(currentClock); //clear the interval first , if previous one was not completed
    currentClock=setTimeout(searchBackend,30);
}

debouncedSearchBackend();
debouncedSearchBackend();
debouncedSearchBackend();
debouncedSearchBackend();
debouncedSearchBackend();
debouncedSearchBackend();
debouncedSearchBackend();
debouncedSearchBackend();