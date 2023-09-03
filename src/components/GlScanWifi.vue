<style>
.set-wifi-dialog .dialog-title {
    display: flex;
    align-items: center;
    width: 100%;
    height: 100%;
}
.set-wifi-dialog .dialog-title .icon-loading {
    margin-right: 10px;
}
.set-wifi-dialog .dialog-title .lock-band-tips {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 12px;
    margin-left: 10px;
    min-width: 60px;
    height: 23px;
    background-color: var(--secondary);
    border-radius: 5px;
    color: #fff;
    padding: 0 8px;
    cursor: pointer;
}
.set-wifi-dialog .dialog-title .lock-band-tips .icon-lock {
    margin-right: 4px;
    font-size: 12px;
}
.set-wifi-dialog .dialog-title .icon-redo-alt {
    display: inline-block;
    margin-left: auto;
}
.set-wifi-dialog .dialog-title .icon-wrong.is-close {
    margin-left: auto;
}
.set-wifi-dialog .dialog-title .icon-redo-alt,
.set-wifi-dialog .dialog-title .icon-wrong {
    font-weight: 400;
    font-size: 14px;
    color: var(--icon);
    cursor: pointer;
}
.set-wifi-dialog .dialog-main {
    height: 55vh;
}
.set-wifi-dialog .dialog-main.is-small {
    height: calc(55vh - 60px);
}
.set-wifi-dialog .dialog-main .saved-ap-title,
.set-wifi-dialog .dialog-main .scan-wifi-title {
    padding: 0 10px;
    height: 40px;
    color: var(--text-subtitle);
    font-size: 14px;
    font-weight: 700;
    border-radius: 5px;
    background-color: var(--background-subtitle);
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.set-wifi-dialog .dialog-main .scan-wifi-title .iconfont {
    color: var(--info);
    font-size: 14px;
    font-weight: 400;
}
.set-wifi-dialog .dialog-main .scan-wifi-title .other-btn {
    font-weight: 400;
}
.set-wifi-dialog .dialog-main .saved-ap-main .wifi-list,
.set-wifi-dialog .dialog-main .scan-wifi-main .wifi-list {
    padding: 10px 0;
}
.set-wifi-dialog .dialog-main .saved-ap-main .wifi-list li,
.set-wifi-dialog .dialog-main .scan-wifi-main .wifi-list li {
    display: flex;
    align-items: center;
    padding: 0 10px;
    color: var(--text-regular);
    cursor: pointer;
}
.set-wifi-dialog
    .dialog-main
    .saved-ap-main
    .wifi-list
    li:hover,
.set-wifi-dialog
    .dialog-main
    .scan-wifi-main
    .wifi-list
    li:hover {
    background-color: var(--secondary-background);
}
.set-wifi-dialog
    .dialog-main
    .saved-ap-main
    .wifi-list
    li
    .ssid-info,
.set-wifi-dialog
    .dialog-main
    .scan-wifi-main
    .wifi-list
    li
    .ssid-info {
    display: flex;
    align-items: center;
}
.set-wifi-dialog
    .dialog-main
    .saved-ap-main
    .wifi-list
    li
    .ssid-name,
.set-wifi-dialog
    .dialog-main
    .scan-wifi-main
    .wifi-list
    li
    .ssid-name {
    flex: 1;
    font-size: 16px;
    margin-left: 16px;
    padding: 10px 0;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    white-space: pre;
}
.set-wifi-dialog
    .dialog-main
    .saved-ap-main
    .wifi-list
    li
    .ssid-name
    .ssid,
.set-wifi-dialog
    .dialog-main
    .scan-wifi-main
    .wifi-list
    li
    .ssid-name
    .ssid {
    width: 80%;
    white-space: pre-wrap;
}
.set-wifi-dialog
    .dialog-main
    .saved-ap-main
    .wifi-list
    li
    .ssid-name
    .lock-bssid,
.set-wifi-dialog
    .dialog-main
    .scan-wifi-main
    .wifi-list
    li
    .ssid-name
    .lock-bssid {
    display: flex;
    justify-content: center;
    font-size: 12px;
    margin-left: 10px;
    background-color: var(--warning-background);
    border: 1px solid var(--warning);
    color: var(--warning);
    border-radius: 5px;
    padding: 4px;
    max-height: 23px;
}
.set-wifi-dialog
    .dialog-main
    .saved-ap-main
    .wifi-list
    li
    .ssid-name
    .lock-bssid
    .icon-lock,
.set-wifi-dialog
    .dialog-main
    .scan-wifi-main
    .wifi-list
    li
    .ssid-name
    .lock-bssid
    .icon-lock {
    font-size: 12px;
    margin-right: 6px;
}
.set-wifi-dialog
    .dialog-main
    .saved-ap-main
    .wifi-list
    li
    .iconfont,
.set-wifi-dialog
    .dialog-main
    .scan-wifi-main
    .wifi-list
    li
    .iconfont {
    font-size: 16px;
    color: var(--icon);
}
.set-wifi-dialog
    .dialog-main
    .saved-ap-main
    .wifi-list
    li
    .wifi-band,
.set-wifi-dialog
    .dialog-main
    .scan-wifi-main
    .wifi-list
    li
    .wifi-band {
    display: inline-block;
    font-size: 14px;
    color: var(--text-weak);
    border: 1px solid var(--text-weak);
    border-radius: 5px;
    padding: 2px 8px;
    width: 56px;
    text-align: center;
    margin-left: auto;
}
.set-wifi-dialog .dialog-main .wifi-form li {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 5px 10px;
    min-height: 50px;
    color: var(--text-weak);
}
.set-wifi-dialog
    .dialog-main
    .wifi-form
    li.wifi-key-li
    .iconfont {
    display: inline-block;
    width: 30px;
    height: 35px;
    line-height: 35px;
    text-align: center;
    cursor: pointer;
}
.set-wifi-dialog .dialog-main .wifi-form li > div:first-child {
    color: var(--text-weak);
    text-transform: capitalize;
    display: flex;
}
.set-wifi-dialog
    .dialog-main
    .wifi-form
    li
    > div:first-child
    .icon-info {
    margin-left: 4px;
}
.set-wifi-dialog .dialog-main .wifi-form li > div:last-child {
    text-align: right;
    width: 220px;
}
.set-wifi-dialog .dialog-main .wifi-form .title-li {
    padding: 0 10px;
    height: 40px;
    color: var(--text-subtitle);
    font-size: 14px;
    font-weight: 700;
    border-radius: 5px;
    background-color: var(--background-subtitle);
}
.set-wifi-dialog .dialog-main .advance-form {
    border-top: 1px solid var(--divider);
}
.set-wifi-dialog .dialog-main .advanced-btn {
    margin-top: 5px;
    border-top: 1px solid var(--divider);
    padding: 0 10px;
    min-height: 50px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
}
.set-wifi-dialog .dialog-main .advanced-btn .btn-item {
    padding: 10px 0;
    display: flex;
    align-items: center;
}
.set-wifi-dialog .dialog-footer-btns {
    display: flex;
    justify-content: center;
    align-items: center;
}
.set-wifi-dialog .dialog-footer-btns .btn-item {
    width: 124px;
    height: 36px;
}
.main-select
    .el-scrollbar
    .el-select-dropdown__wrap
    .el-select-dropdown__item {
    height: 44px;
    line-height: 1;
    display: flex;
    justify-content: flex-start;
    align-items: center;
}
.main-select
    .el-scrollbar
    .el-select-dropdown__wrap
    .el-select-dropdown__item
    .bssid-info {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
}
.main-select
    .el-scrollbar
    .el-select-dropdown__wrap
    .el-select-dropdown__item
    .bssid-info
    .more-info {
    margin-top: 4px;
    font-weight: 400;
    font-size: 12px;
    color: var(--text-weak);
}
.main-select
    .el-scrollbar
    .el-select-dropdown__wrap
    .el-select-dropdown__item.selected
    .bssid-info
    .more-info {
    color: #fff;
}
</style>
