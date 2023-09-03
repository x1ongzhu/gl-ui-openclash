<style>
.week-list {
    margin-left: auto;
    justify-content: flex-end;
    max-width: 400px;
    width: 80%;
}
.week-list,
.week-list > li {
    display: flex;
    align-items: center;
}
.week-list > li {
    justify-content: center;
    border: 1px solid var(--border);
    border-radius: 5px;
    width: 44px;
    height: 44px;
    margin-right: 12px;
    cursor: pointer;
    font-size: 12px;
    color: var(--text-regular);
}
.week-list > li:last-child {
    margin-right: 0;
}
.week-list > li.is-active {
    background-color: var(--secondary-background);
    border-color: var(--secondary);
    position: relative;
}
.week-list > li.is-active .iconfont {
    position: absolute;
    bottom: -1px;
    right: -1px;
    width: 24px;
    height: 24px;
    font-size: 16px;
    transform: scale(0.5) translate(50%, 50%);
    background-color: var(--secondary);
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    border-top-left-radius: 5px;
    border-bottom-right-radius: 5px;
    z-index: 1;
}
@media screen and (max-width: 600px) {
    .week-list {
        justify-content: flex-start;
        width: 100%;
        margin-left: 0;
        flex-wrap: wrap;
    }
    .week-list > li {
        margin-top: 12px;
    }
}
</style>
