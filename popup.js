document.addEventListener("DOMContentLoaded", function () {
    const textArea = document.getElementById("textArea");
    const saveButtons = document.querySelectorAll(".saveBtn"); // Fix: Use querySelectorAll
    const loadButtons = document.querySelectorAll(".loadBtn"); // Fix: Use querySelectorAll
    const clearButtons = document.querySelectorAll(".clearBtn");

    // Auto-load saved text when popup opens
    saveButtons.forEach((button, index) => {
        button.addEventListener("click", function () {
            const text = textArea.value || "";
            const slotKey = `slot${index + 1}`;

            chrome.storage.sync.set({ [slotKey]: text }, function () {
                alert(`Saved to Slot ${index + 1} (Synced)`);
            });
        });
    });

    loadButtons.forEach((button, index) => {
        button.addEventListener("click", function () {
            const slotKey = `slot${index + 1}`;

            chrome.storage.sync.get([slotKey], function (data) {
                textArea.value = data[slotKey] || "";
            });
        });
    });

    clearButtons.forEach((button, index) => {
        button.addEventListener("click", function () {
            const slotKey = `slot${index + 1}`;

            chrome.storage.sync.remove(slotKey, function () {
                alert(`Cleared Slot ${index + 1} (Synced)`);
            });
        });
    });
});