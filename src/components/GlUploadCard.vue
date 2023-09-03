<style>
.upload-card-wrapper {
    width: 100%;
}
.upload-card-wrapper #glUploadFile {
    display: none;
}
.upload-card-wrapper .upload-container {
    cursor: pointer;
    padding: 20px;
    background-color: var(--background-card);
    width: 100%;
    height: 240px;
    border: 1.5px dashed var(--text-weak);
    border-radius: 5px;
    transition: background-color 0.15s linear;
    -webkit-transition: background-color 0.15s linear;
    display: flex;
    justify-content: center;
    align-items: center;
}
.upload-card-wrapper .upload-container.is-success {
    background-color: var(--success-background);
    border-style: solid;
    border-color: var(--success);
}
.upload-card-wrapper .upload-container.is-error {
    background-color: var(--error-background);
    border-style: dashed;
    border-color: var(--error);
}
.upload-card-wrapper .upload-container .default-status {
    display: flex;
    align-items: center;
    color: var(--text-regular);
}
.upload-card-wrapper
    .upload-container
    .default-status
    .icon-arrow-up {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 58px;
    height: 58px;
    border-radius: 50%;
    background-color: var(--background-subtitle);
    font-size: 24px;
    color: var(--icon);
    margin-right: 12px;
}
.upload-card-wrapper
    .upload-container
    .default-status
    .text-tips {
    display: flex;
    flex-direction: column;
    justify-content: center;
    font-size: 12px;
}
.upload-card-wrapper
    .upload-container
    .default-status
    .text-tips
    .text-btn {
    font-weight: 700;
    font-size: 16px;
}
.upload-card-wrapper
    .upload-container
    .default-status
    .text-tips
    .allow-text-tips {
    margin-top: 2px;
}
.upload-card-wrapper .upload-container .loading-status {
    font-size: 48px;
    color: var(--text-regular);
}
.upload-card-wrapper .upload-container .success-status {
    display: flex;
    flex-direction: column;
    align-items: center;
    color: var(--text-regular);
    font-size: 14px;
}
.upload-card-wrapper
    .upload-container
    .success-status
    .icon-success {
    color: var(--success);
    font-size: 45px;
}
.upload-card-wrapper
    .upload-container
    .success-status
    .success-text {
    font-weight: 700;
    margin: 15px 0;
    color: var(--success);
    font-size: 16px;
}
.upload-card-wrapper
    .upload-container
    .success-status
    .file-name {
    margin-bottom: 40px;
}
.upload-card-wrapper
    .upload-container
    .success-status
    .re-btn {
    font-weight: 700;
    font-size: 16px;
    cursor: pointer;
}
.upload-card-wrapper
    .upload-container
    .success-status
    .re-btn:hover {
    text-decoration: underline;
}
.upload-card-wrapper .upload-container .error-status {
    display: flex;
    flex-direction: column;
    align-items: center;
    color: var(--text-regular);
    font-size: 14px;
}
.upload-card-wrapper
    .upload-container
    .error-status
    .icon-warning {
    color: var(--error);
    font-size: 45px;
}
.upload-card-wrapper
    .upload-container
    .error-status
    .error-text {
    font-weight: 700;
    margin: 15px 0;
    color: var(--error);
    font-size: 16px;
}
.upload-card-wrapper
    .upload-container
    .error-status
    .error-tips {
    margin-bottom: 40px;
}
.upload-card-wrapper .upload-container .error-status .re-btn {
    font-weight: 700;
    font-size: 16px;
    cursor: pointer;
}
.upload-card-wrapper
    .upload-container
    .error-status
    .re-btn:hover {
    text-decoration: underline;
}
.upload-card-wrapper .text-in {
    animation: textIn-data-v-65e35648 0.3s ease 1;
    -webkit-animation: textIn-data-v-65e35648 0.3s ease 1;
}
@-webkit-keyframes textIn-data-v-65e35648 {
    0% {
        transform: scale(0.3);
    }
    90% {
        transform: scale(1.1);
    }
    to {
        transform: scale(1);
    }
}
@keyframes textIn-data-v-65e35648 {
    0% {
        transform: scale(0.3);
    }
    90% {
        transform: scale(1.1);
    }
    to {
        transform: scale(1);
    }
}
</style>
