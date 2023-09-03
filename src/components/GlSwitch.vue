<style>
.gl-switch {
    position: relative;
    overflow: hidden;
    display: inline-block;
}
.gl-switch .msg {
    position: absolute;
    top: 50%;
    font-weight: 700;
    font-size: 12px;
    transition: left 0.3s;
    color: #fff;
}
.gl-switch .msg.on-msg {
    opacity: 0;
    left: -10px;
    transform: translateY(-50%);
}
.gl-switch .msg.off-msg {
    opacity: 0;
    left: 90px;
    transform: translate(-100%, -50%);
}
.gl-switch .msg.is-on {
    opacity: 1;
    left: 9px;
    transform: translateY(-50%);
}
.gl-switch .msg.is-off {
    opacity: 1;
    left: 51px;
    transform: translate(-100%, -50%);
}
.gl-switch .switch-inp {
    border-radius: 20px;
    display: block;
    background-color: var(--text-disabled);
    background-clip: content-box;
    -webkit-appearance: none;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    outline: none;
    cursor: pointer;
}
.gl-switch .switch-inp.is-disable {
    cursor: no-drop;
    background-color: var(--background-disabled);
}
.gl-switch .switch-inp.is-disable + .status {
    cursor: no-drop;
    box-shadow: none;
    border: none;
    background-color: var(--background-controller);
}
.gl-switch .switch-inp.is-checked {
    background-color: var(--success);
    box-shadow: none;
}
.gl-switch .switch-inp.is-checked.is-disable {
    cursor: no-drop;
    background-color: var(--success-disabled);
}
.gl-switch .switch-inp.is-checked.is-disable + .status {
    cursor: no-drop;
    box-shadow: none;
    border: none;
    background-color: var(--background-controller);
}
.gl-switch .switch-inp + .status {
    cursor: pointer;
    position: absolute;
    width: 34px;
    height: 34px;
    top: 50%;
    transform: translateY(-50%);
    left: 3px;
    border-radius: 50%;
    background-color: #fff;
    border-right: 1px solid var(--border);
    box-shadow: 0 0 3px var(--shadow) inset;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 2;
}
.gl-switch .switch-inp-small {
    width: 36px;
    height: 22px;
    border-radius: 11px;
}
.gl-switch .switch-inp-small + .status {
    left: 2px;
    width: 18px;
    height: 18px;
}
.gl-switch .switch-inp-small.is-checked + .status {
    left: 16px;
}
.gl-switch .switch-inp-medium {
    width: 56px;
    height: 28px;
    border-radius: 20px;
}
.gl-switch .switch-inp-medium + .status {
    width: 22px;
    height: 22px;
}
.gl-switch .switch-inp-medium.is-checked + .status {
    left: 32px;
}
.gl-switch.switch-main .switch-inp {
    transition: border 0.3s cubic-bezier(0, 0, 0, 1),
        box-shadow 0.3s cubic-bezier(0, 0, 0, 1);
}
.gl-switch.switch-main .switch-inp + .status {
    transition: left 0.3s;
}
.gl-switch.switch-main .switch-inp.is-checked {
    transition: border 0.4s ease, background-color 1.2s ease;
}
.gl-switch.switch-main .switch-inp.is-checked + .status {
    transition: left 0.3s;
}
</style>
