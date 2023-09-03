<style>
.gl-time-pick {
    width: 100%;
    max-width: 160px;
    min-width: 100px;
    margin-bottom: -10px;
}
.gl-time-pick .gl-dropdown-wrapper {
    width: 100%;
}
.gl-time-pick .gl-dropdown-wrapper .dropdown-label {
    padding: 0;
    padding-bottom: 10px;
    width: 100%;
}
.time-label {
    width: 100%;
    cursor: pointer;
    display: flex;
    align-items: center;
    height: 35px;
    border: 1px solid var(--border);
    padding: 0 14px;
    border-radius: 5px;
    background-color: var(--background-card);
}
.time-label.is-focus {
    border-color: var(--primary);
}
.time-label .iconfont {
    color: var(--icon);
    font-size: 14px;
}
.time-label .value {
    display: inline-block;
    width: 90%;
    margin-left: 10px;
    color: var(--text-regular);
    border: none;
    background-color: inherit;
}
.time-label.is-disable {
    cursor: not-allowed;
    background-color: var(--background-disabled);
    border-color: var(--border);
}
.time-label.is-disable .iconfont {
    color: var(--icon-disabled);
}
.time-label.is-disable .value {
    color: var(--text-disabled);
}
.time-main {
    display: flex;
    height: 200px;
    overflow: hidden;
}
.time-main > ul {
    max-height: 200px;
    overflow-x: hidden;
    overflow-y: auto;
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 8px;
}
.time-main > ul:last-child {
    padding-left: 0;
}
.time-main > ul::-webkit-scrollbar {
    display: none;
    width: 8px;
    height: 8px;
}
.time-main > ul:hover::-webkit-scrollbar {
    display: block;
    width: 8px;
    height: 8px;
}
.time-main > ul:hover > li {
    margin-right: -8px;
}
.time-main > ul > li {
    width: 66px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px 0;
    cursor: pointer;
    color: var(--text-regular);
}
.time-main > ul > li.is-active {
    color: #fff;
    background-color: var(--secondary);
}
</style>
