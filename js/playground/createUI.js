define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.createUI = void 0;
    exports.createUI = () => {
        const flashInfo = (message) => {
            var _a;
            let flashBG = document.getElementById("flash-bg");
            if (flashBG) {
                (_a = flashBG.parentElement) === null || _a === void 0 ? void 0 : _a.removeChild(flashBG);
            }
            flashBG = document.createElement("div");
            flashBG.id = "flash-bg";
            const p = document.createElement("p");
            p.textContent = message;
            flashBG.appendChild(p);
            document.body.appendChild(flashBG);
            setTimeout(() => {
                var _a;
                (_a = flashBG === null || flashBG === void 0 ? void 0 : flashBG.parentElement) === null || _a === void 0 ? void 0 : _a.removeChild(flashBG);
            }, 1000);
        };
        const createModalOverlay = (classList) => {
            document.querySelectorAll(".navbar-sub li.open").forEach(i => i.classList.remove("open"));
            const existingPopover = document.getElementById("popover-modal");
            if (existingPopover)
                existingPopover.parentElement.removeChild(existingPopover);
            const modalBG = document.createElement("div");
            modalBG.id = "popover-background";
            document.body.appendChild(modalBG);
            const modal = document.createElement("div");
            modal.id = "popover-modal";
            if (classList)
                modal.className = classList;
            const closeButton = document.createElement("button");
            closeButton.innerText = "Close";
            closeButton.classList.add("close");
            closeButton.tabIndex = 1;
            modal.appendChild(closeButton);
            const oldOnkeyDown = document.onkeydown;
            const close = () => {
                modalBG.parentNode.removeChild(modalBG);
                modal.parentNode.removeChild(modal);
                // @ts-ignore
                document.onkeydown = oldOnkeyDown;
            };
            modalBG.onclick = close;
            closeButton.onclick = close;
            // Support hiding the modal via escape
            document.onkeydown = function (evt) {
                evt = evt || window.event;
                var isEscape = false;
                if ("key" in evt) {
                    isEscape = evt.key === "Escape" || evt.key === "Esc";
                }
                else {
                    // @ts-ignore - this used to be the case
                    isEscape = evt.keyCode === 27;
                }
                if (isEscape) {
                    close();
                }
            };
            document.body.appendChild(modal);
            return modal;
        };
        /** For showing a lot of code */
        const showModal = (code, subtitle, links) => {
            const modal = createModalOverlay();
            if (subtitle) {
                const titleElement = document.createElement("p");
                titleElement.textContent = subtitle;
                modal.appendChild(titleElement);
            }
            const textarea = document.createElement("textarea");
            textarea.autofocus = true;
            textarea.readOnly = true;
            textarea.wrap = "off";
            textarea.style.marginBottom = "20px";
            modal.appendChild(textarea);
            textarea.textContent = code;
            textarea.rows = 60;
            const buttonContainer = document.createElement("div");
            const copyButton = document.createElement("button");
            copyButton.innerText = "Copy";
            buttonContainer.appendChild(copyButton);
            const selectAllButton = document.createElement("button");
            selectAllButton.innerText = "Select All";
            buttonContainer.appendChild(selectAllButton);
            modal.appendChild(buttonContainer);
            textarea.focus();
            textarea.select();
            if (links) {
                Object.keys(links).forEach(name => {
                    const href = links[name];
                    const extraButton = document.createElement("button");
                    extraButton.innerText = name;
                    extraButton.onclick = () => (document.location = href);
                    buttonContainer.appendChild(extraButton);
                });
            }
            const selectAll = () => {
                textarea.select();
            };
            selectAll();
            selectAllButton.onclick = selectAll;
            copyButton.onclick = () => {
                navigator.clipboard.writeText(code);
            };
        };
        return {
            createModalOverlay,
            showModal,
            flashInfo,
        };
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlYXRlVUkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wbGF5Z3JvdW5kL3NyYy9jcmVhdGVVSS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0lBU2EsUUFBQSxRQUFRLEdBQUcsR0FBTyxFQUFFO1FBQy9CLE1BQU0sU0FBUyxHQUFHLENBQUMsT0FBZSxFQUFFLEVBQUU7O1lBQ3BDLElBQUksT0FBTyxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsVUFBVSxDQUFDLENBQUE7WUFDakQsSUFBSSxPQUFPLEVBQUU7Z0JBQ1gsTUFBQSxPQUFPLENBQUMsYUFBYSwwQ0FBRSxXQUFXLENBQUMsT0FBTyxFQUFDO2FBQzVDO1lBRUQsT0FBTyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUE7WUFDdkMsT0FBTyxDQUFDLEVBQUUsR0FBRyxVQUFVLENBQUE7WUFFdkIsTUFBTSxDQUFDLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsQ0FBQTtZQUNyQyxDQUFDLENBQUMsV0FBVyxHQUFHLE9BQU8sQ0FBQTtZQUN2QixPQUFPLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFBO1lBQ3RCLFFBQVEsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxDQUFBO1lBRWxDLFVBQVUsQ0FBQyxHQUFHLEVBQUU7O2dCQUNkLE1BQUEsT0FBTyxhQUFQLE9BQU8sdUJBQVAsT0FBTyxDQUFFLGFBQWEsMENBQUUsV0FBVyxDQUFDLE9BQU8sRUFBQztZQUM5QyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUE7UUFDVixDQUFDLENBQUE7UUFFRCxNQUFNLGtCQUFrQixHQUFHLENBQUMsU0FBa0IsRUFBRSxFQUFFO1lBQ2hELFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFD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TyxHQUFHLEdBQUcsRUFBRSxDQUFDLENBQUMsUUFBUSxDQUFDLFFBQVEsR0FBRyxJQUFXLENBQUMsQ0FBQTtvQkFDN0QsZUFBZSxDQUFDLFdBQVcsQ0FBQyxXQUFXLENBQUMsQ0FBQTtnQkFDMUMsQ0FBQyxDQUFDLENBQUE7YUFDSDtZQUVELE1BQU0sU0FBUyxHQUFHLEdBQUcsRUFBRTtnQkFDckIsUUFBUSxDQUFDLE1BQU0sRUFBRSxDQUFBO1lBQ25CLENBQUMsQ0FBQTtZQUNELFNBQVMsRUFBRSxDQUFBO1lBRVgsZUFBZSxDQUFDLE9BQU8sR0FBRyxTQUFTLENBQUE7WUFDbkMsVUFBVSxDQUFDLE9BQU8sR0FBRyxHQUFHLEVBQUU7Z0JBQ3hCLFNBQVMsQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFBO1lBQ3JDLENBQUMsQ0FBQTtRQUNILENBQUMsQ0FBQTtRQUVELE9BQU87WUFDTCxrQkFBa0I7WUFDbEIsU0FBUztZQUNULFNBQVM7U0FDVixDQUFBO0lBQ0gsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGludGVyZmFjZSBVSSB7XG4gIC8qKiBTaG93IGEgdGV4dCBtb2RhbCwgd2l0aCBzb21lIGJ1dHRvbnMgKi9cbiAgc2hvd01vZGFsOiAobWVzc2FnZTogc3RyaW5nLCBzdWJ0aXRsZT86IHN0cmluZywgYnV0dG9ucz86IHsgW3RleHQ6IHN0cmluZ106IHN0cmluZyB9KSA9PiB2b2lkXG4gIC8qKiBBIHF1aWNrIGZsYXNoIG9mIHNvbWUgdGV4dCAqL1xuICBmbGFzaEluZm86IChtZXNzYWdlOiBzdHJpbmcpID0+IHZvaWRcbiAgLyoqIENyZWF0ZXMgYSBtb2RhbCBjb250YWluZXIgd2hpY2ggeW91IGNhbiBwdXQgeW91ciBvd24gRE9NIGVsZW1lbnRzIGluc2lkZSAqL1xuICBjcmVhdGVNb2RhbE92ZXJsYXk6IChjbGFzc2VzPzogc3RyaW5nKSA9PiBIVE1MRGl2RWxlbWVudFxufVxuXG5leHBvcnQgY29uc3QgY3JlYXRlVUkgPSAoKTogVUkgPT4ge1xuICBjb25zdCBmbGFzaEluZm8gPSAobWVzc2FnZTogc3RyaW5nKSA9PiB7XG4gICAgbGV0IGZsYXNoQkcgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImZsYXNoLWJnXCIpXG4gICAgaWYgKGZsYXNoQkcpIHtcbiAgICAgIGZsYXNoQkcucGFyZW50RWxlbWVudD8ucmVtb3ZlQ2hpbGQoZmxhc2hCRylcbiAgICB9XG5cbiAgICBmbGFzaEJHID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuICAgIGZsYXNoQkcuaWQgPSBcImZsYXNoLWJnXCJcblxuICAgIGNvbnN0IHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKVxuICAgIHAudGV4dENvbnRlbnQgPSBtZXNzYWdlXG4gICAgZmxhc2hCRy5hcHBlbmRDaGlsZChwKVxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZmxhc2hCRylcblxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgZmxhc2hCRz8ucGFyZW50RWxlbWVudD8ucmVtb3ZlQ2hpbGQoZmxhc2hCRylcbiAgICB9LCAxMDAwKVxuICB9XG5cbiAgY29uc3QgY3JlYXRlTW9kYWxPdmVybGF5ID0gKGNsYXNzTGlzdD86IHN0cmluZykgPT4ge1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIubmF2YmFyLXN1YiBsaS5vcGVuXCIpLmZvckVhY2goaSA9PiBpLmNsYXNzTGlzdC5yZW1vdmUoXCJvcGVuXCIpKVxuXG4gICAgY29uc3QgZXhpc3RpbmdQb3BvdmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwb3BvdmVyLW1vZGFsXCIpXG4gICAgaWYgKGV4aXN0aW5nUG9wb3ZlcikgZXhpc3RpbmdQb3BvdmVyLnBhcmVudEVsZW1lbnQhLnJlbW92ZUNoaWxkKGV4aXN0aW5nUG9wb3ZlcilcblxuICAgIGNvbnN0IG1vZGFsQkcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG4gICAgbW9kYWxCRy5pZCA9IFwicG9wb3Zlci1iYWNrZ3JvdW5kXCJcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKG1vZGFsQkcpXG5cbiAgICBjb25zdCBtb2RhbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbiAgICBtb2RhbC5pZCA9IFwicG9wb3Zlci1tb2RhbFwiXG4gICAgaWYgKGNsYXNzTGlzdCkgbW9kYWwuY2xhc3NOYW1lID0gY2xhc3NMaXN0XG5cbiAgICBjb25zdCBjbG9zZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIilcbiAgICBjbG9zZUJ1dHRvbi5pbm5lclRleHQgPSBcIkNsb3NlXCJcbiAgICBjbG9zZUJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwiY2xvc2VcIilcbiAgICBjbG9zZUJ1dHRvbi50YWJJbmRleCA9IDFcbiAgICBtb2RhbC5hcHBlbmRDaGlsZChjbG9zZUJ1dHRvbilcblxuICAgIGNvbnN0IG9sZE9ua2V5RG93biA9IGRvY3VtZW50Lm9ua2V5ZG93blxuXG4gICAgY29uc3QgY2xvc2UgPSAoKSA9PiB7XG4gICAgICBtb2RhbEJHLnBhcmVudE5vZGUhLnJlbW92ZUNoaWxkKG1vZGFsQkcpXG4gICAgICBtb2RhbC5wYXJlbnROb2RlIS5yZW1vdmVDaGlsZChtb2RhbClcbiAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgIGRvY3VtZW50Lm9ua2V5ZG93biA9IG9sZE9ua2V5RG93blxuICAgIH1cblxuICAgIG1vZGFsQkcub25jbGljayA9IGNsb3NlXG4gICAgY2xvc2VCdXR0b24ub25jbGljayA9IGNsb3NlXG5cbiAgICAvLyBTdXBwb3J0IGhpZGluZyB0aGUgbW9kYWwgdmlhIGVzY2FwZVxuICAgIGRvY3VtZW50Lm9ua2V5ZG93biA9IGZ1bmN0aW9uIChldnQpIHtcbiAgICAgIGV2dCA9IGV2dCB8fCB3aW5kb3cuZXZlbnRcbiAgICAgIHZhciBpc0VzY2FwZSA9IGZhbHNlXG4gICAgICBpZiAoXCJrZXlcIiBpbiBldnQpIHtcbiAgICAgICAgaXNFc2NhcGUgPSBldnQua2V5ID09PSBcIkVzY2FwZVwiIHx8IGV2dC5rZXkgPT09IFwiRXNjXCJcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIEB0cy1pZ25vcmUgLSB0aGlzIHVzZWQgdG8gYmUgdGhlIGNhc2VcbiAgICAgICAgaXNFc2NhcGUgPSBldnQua2V5Q29kZSA9PT0gMjdcbiAgICAgIH1cbiAgICAgIGlmIChpc0VzY2FwZSkge1xuICAgICAgICBjbG9zZSgpXG4gICAgICB9XG4gICAgfVxuXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChtb2RhbClcblxuICAgIHJldHVybiBtb2RhbFxuICB9XG5cbiAgLyoqIEZvciBzaG93aW5nIGEgbG90IG9mIGNvZGUgKi9cbiAgY29uc3Qgc2hvd01vZGFsID0gKGNvZGU6IHN0cmluZywgc3VidGl0bGU/OiBzdHJpbmcsIGxpbmtzPzogeyBbdGV4dDogc3RyaW5nXTogc3RyaW5nIH0pID0+IHtcbiAgICBjb25zdCBtb2RhbCA9IGNyZWF0ZU1vZGFsT3ZlcmxheSgpXG5cbiAgICBpZiAoc3VidGl0bGUpIHtcbiAgICAgIGNvbnN0IHRpdGxlRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpXG4gICAgICB0aXRsZUVsZW1lbnQudGV4dENvbnRlbnQgPSBzdWJ0aXRsZVxuICAgICAgbW9kYWwuYXBwZW5kQ2hpbGQodGl0bGVFbGVtZW50KVxuICAgIH1cblxuICAgIGNvbnN0IHRleHRhcmVhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRleHRhcmVhXCIpXG4gICAgdGV4dGFyZWEuYXV0b2ZvY3VzID0gdHJ1ZVxuICAgIHRleHRhcmVhLnJlYWRPbmx5ID0gdHJ1ZVxuICAgIHRleHRhcmVhLndyYXAgPSBcIm9mZlwiXG4gICAgdGV4dGFyZWEuc3R5bGUubWFyZ2luQm90dG9tID0gXCIyMHB4XCJcbiAgICBtb2RhbC5hcHBlbmRDaGlsZCh0ZXh0YXJlYSlcbiAgICB0ZXh0YXJlYS50ZXh0Q29udGVudCA9IGNvZGVcbiAgICB0ZXh0YXJlYS5yb3dzID0gNjBcblxuICAgIGNvbnN0IGJ1dHRvbkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcblxuICAgIGNvbnN0IGNvcHlCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpXG4gICAgY29weUJ1dHRvbi5pbm5lclRleHQgPSBcIkNvcHlcIlxuICAgIGJ1dHRvbkNvbnRhaW5lci5hcHBlbmRDaGlsZChjb3B5QnV0dG9uKVxuXG4gICAgY29uc3Qgc2VsZWN0QWxsQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKVxuICAgIHNlbGVjdEFsbEJ1dHRvbi5pbm5lclRleHQgPSBcIlNlbGVjdCBBbGxcIlxuICAgIGJ1dHRvbkNvbnRhaW5lci5hcHBlbmRDaGlsZChzZWxlY3RBbGxCdXR0b24pXG5cbiAgICBtb2RhbC5hcHBlbmRDaGlsZChidXR0b25Db250YWluZXIpXG4gICAgdGV4dGFyZWEuZm9jdXMoKVxuICAgIHRleHRhcmVhLnNlbGVjdCgpXG5cbiAgICBpZiAobGlua3MpIHtcbiAgICAgIE9iamVjdC5rZXlzKGxpbmtzKS5mb3JFYWNoKG5hbWUgPT4ge1xuICAgICAgICBjb25zdCBocmVmID0gbGlua3NbbmFtZV1cbiAgICAgICAgY29uc3QgZXh0cmFCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpXG4gICAgICAgIGV4dHJhQnV0dG9uLmlubmVyVGV4dCA9IG5hbWVcbiAgICAgICAgZXh0cmFCdXR0b24ub25jbGljayA9ICgpID0+IChkb2N1bWVudC5sb2NhdGlvbiA9IGhyZWYgYXMgYW55KVxuICAgICAgICBidXR0b25Db250YWluZXIuYXBwZW5kQ2hpbGQoZXh0cmFCdXR0b24pXG4gICAgICB9KVxuICAgIH1cblxuICAgIGNvbnN0IHNlbGVjdEFsbCA9ICgpID0+IHtcbiAgICAgIHRleHRhcmVhLnNlbGVjdCgpXG4gICAgfVxuICAgIHNlbGVjdEFsbCgpXG5cbiAgICBzZWxlY3RBbGxCdXR0b24ub25jbGljayA9IHNlbGVjdEFsbFxuICAgIGNvcHlCdXR0b24ub25jbGljayA9ICgpID0+IHtcbiAgICAgIG5hdmlnYXRvci5jbGlwYm9hcmQud3JpdGVUZXh0KGNvZGUpXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBjcmVhdGVNb2RhbE92ZXJsYXksXG4gICAgc2hvd01vZGFsLFxuICAgIGZsYXNoSW5mbyxcbiAgfVxufVxuIl19