var ellipsctx;
var contexts;
var todayItems;
var observer;

window.onload = function() {
    initialize();
    observer = new MutationObserver((mutations, observer) => {
        initialize();
    })
    observer.observe(document, {
        subtree: true,
        attributes: true
    });
}

function initialize() {
    ellipsctx = $(document).find('#contextcards');
    contexts = $(document).find('.context');
    todayItems = $(document).find('.today-item');

    Array.from(todayItems).forEach(el => el.addEventListener('contextmenu', function(e) {
        overrideDefaultContext(e);
    
        const rect = el.getBoundingClientRect();
        const ctx = $(el).find('.contextcard');
        const xx = e.clientX - rect.left + 10;
        const x = e.clientX + ctx.width() > window.innerWidth ? xx - ctx.width() - 20 : xx;
        const y = e.clientY - rect.top;
    
        // Set the position for menu
        ctx.css('top', `${y}px`);
        ctx.css('left', `${x}px`);

    
        ctx.toggleClass('hidden', false);
        document.addEventListener('click', documentClickHandler, true);
        document.addEventListener('contextmenu', documentContextHandler, true);
    }));

    console.log('init', ellipsctx, contexts, todayItems)
};



function overrideDefaultContext(event) {
    event.preventDefault();
}

function showEllipsContext() {
    ellipsctx.toggleClass('hidden', false);
    document.addEventListener('click', documentClickHandler, true);
}

var selected = false;
function showCardSelect(option) {
    const select = $(document).find('.cardselect');
    $(document).find('.selectoption').toggleClass('hidden', selected);
    select.toggleClass('hidden', selected);
    $(option).toggleClass('rounded-xl', selected)
    if (!selected) {
        $(option).html('Deselect all');
    } else {
        select.prop('checked', false);
        $(option).html('Select...');
    }
    selected = !selected;
}

const documentClickHandler = function(e) {
    var isClicked = false;
    Array.from(contexts).forEach(ctx => isClicked = !ctx.contains(e.target) || ctx.contains(e.target));
    if (isClicked) {
        // Hide the menu
        contexts.toggleClass('hidden', true);

        // Remove the event handler
        document.removeEventListener('click', documentClickHandler, true);
    }
}

const documentContextHandler = function(e) {
    var isClicked = false;
    Array.from(contexts).forEach(c => isClicked = !c.contains(e.target) || c.contains(e.target));
    if (isClicked) {
        contexts.toggleClass('hidden', true);
        document.removeEventListener('contextmenu', documentContextHandler, true);
    }
}

function toNewCard() {
    window.location.href = 'newcard.html';
}