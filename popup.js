document.addEventListener("DOMContentLoaded", function () {
    const textArea = document.getElementById("textArea");
    const saveBtn = document.getElementById("saveBtn");
    const loadBtn = document.getElementById("loadBtn");

    // Auto-load saved text when popup opens
    chrome.storage.local.get(["savedText"], function (data) {
        if (chrome.runtime.lastError) {
            console.error("Storage error:", chrome.runtime.lastError);
        } else {
            textArea.value = data.savedText || "";
        }
    });

    // Save text to Chrome storage
    saveBtn.addEventListener("click", function () {
        chrome.storage.local.set({ savedText: textArea.value || "" }, function () {
        });
    });

    
});
