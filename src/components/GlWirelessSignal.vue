<style>
.wireless-signal-wrapper .icon-container .wifi-icon {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.wireless-signal-wrapper.has-band {
    min-width: 56px;
    height: 23px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 15px;
    background-color: var(--secondary);
    border-radius: 5px;
    padding: 4px 8px;
}
.wireless-signal-wrapper.has-band.no-signal {
    min-width: auto;
}
.wireless-signal-wrapper.has-band.no-signal .band {
    margin-right: 0;
}
.wireless-signal-wrapper.has-band .band {
    font-size: 12px;
    color: #fff !important;
    font-weight: 700;
    margin-right: 6px;
}
.wireless-signal-wrapper.has-band
    .icon-container
    .wifi-icon
    > svg {
    fill: var(--secondary-hover);
}
.wireless-signal-wrapper.has-band
    .icon-container
    .wifi-icon.is-full
    > svg,
.wireless-signal-wrapper.has-band
    .icon-container
    .wifi-icon.is-medium
    > svg
    .wifi-last,
.wireless-signal-wrapper.has-band
    .icon-container
    .wifi-icon.is-medium
    > svg
    .wifi-third,
.wireless-signal-wrapper.has-band
    .icon-container
    .wifi-icon.is-strong
    > svg
    .wifi-last,
.wireless-signal-wrapper.has-band
    .icon-container
    .wifi-icon.is-strong
    > svg
    .wifi-second,
.wireless-signal-wrapper.has-band
    .icon-container
    .wifi-icon.is-strong
    > svg
    .wifi-third,
.wireless-signal-wrapper.has-band
    .icon-container
    .wifi-icon.is-weak
    > svg
    .wifi-last {
    fill: #fff;
}
.wireless-signal-wrapper.is-primary
    .icon-container
    .wifi-icon
    > svg {
    fill: var(--text-hint);
}
.wireless-signal-wrapper.is-primary
    .icon-container
    .wifi-icon.is-full
    > svg,
.wireless-signal-wrapper.is-primary
    .icon-container
    .wifi-icon.is-medium
    > svg
    .wifi-last,
.wireless-signal-wrapper.is-primary
    .icon-container
    .wifi-icon.is-medium
    > svg
    .wifi-third,
.wireless-signal-wrapper.is-primary
    .icon-container
    .wifi-icon.is-strong
    > svg
    .wifi-last,
.wireless-signal-wrapper.is-primary
    .icon-container
    .wifi-icon.is-strong
    > svg
    .wifi-second,
.wireless-signal-wrapper.is-primary
    .icon-container
    .wifi-icon.is-strong
    > svg
    .wifi-third,
.wireless-signal-wrapper.is-primary
    .icon-container
    .wifi-icon.is-weak
    > svg
    .wifi-last,
.wireless-signal-wrapper.is-primary
    .icon-container
    .wifi-icon
    > svg
    .wifi-lock {
    fill: var(--secondary);
}
.wireless-signal-wrapper.is-primary
    .icon-container.is-disbled {
    position: relative;
}
.wireless-signal-wrapper.is-primary
    .icon-container.is-disbled.icon-container
    .wifi-icon
    > svg,
.wireless-signal-wrapper.is-primary
    .icon-container.is-disbled.icon-container
    .wifi-icon
    > svg
    .wifi-lock {
    fill: var(--text-hint);
}
.wireless-signal-wrapper.is-primary
    .icon-container.is-disbled
    .disabled-line {
    position: absolute;
    width: 3px;
    top: 0;
    left: 50%;
    transform: rotate(45deg) translateX(-50%);
    background-color: var(--text-hint);
    border: 1px solid var(--background-card);
    border-radius: 5px;
}
</style>
