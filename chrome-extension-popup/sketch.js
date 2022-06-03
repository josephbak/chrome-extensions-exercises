let userinput = select('#userinput');
userinput.input(changeText);

function changeText() {

    let params = {
        active: true,
        currentWindow: true
    }
    chrome.tabs.query(params, gotTabs);

    function gotTabs(tabs) {
        console.log(tabs);
        // send a message to the content script
        let message = userinput.value();
        let msg = {
            txt: "hello"
        }
        chrome.tabs.sendMessage(tab[0].id, msg);
    }
}