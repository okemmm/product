// チャットボットを表示する関数
document.getElementById("chatButton").addEventListener("click", function() {
    window.watsonAssistantChatOptions = {
        integrationID: "YOUR_INTEGRATION_ID", // 取得したIntegration IDをここに記入
        region: "YOUR_REGION",               // サービスがホストされている地域
        serviceInstanceID: "YOUR_SERVICE_INSTANCE_ID", // サービスのインスタンスID
        onLoad: async (instance) => { await instance.render(); }
    };

    // チャットボットのスクリプトを読み込む
    setTimeout(function() {
        const t = document.createElement('script');
        t.src = "https://web-chat.global.assistant.watson.appdomain.cloud/versions/" +
                (window.watsonAssistantChatOptions.clientVersion || 'latest') + "/WatsonAssistantChatEntry.js";
        document.head.appendChild(t);
    }, 100); // 0.1秒待って読み込む
});
