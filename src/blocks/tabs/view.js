/**
 * Initialise tous les groupes d'onglets présents dans la page.
 */
function initTabs() {
    const tabGroups = document.querySelectorAll( '.wp-block-gab-tabs' );

    tabGroups.forEach( ( group ) => {
        const defaultTab = parseInt( group.dataset.defaultTab ?? '0', 10 );
        const tabStyle   = group.dataset.tabStyle  ?? 'underline';
        const animation  = group.dataset.animation ?? 'fade';

        group.classList.add( `is-style-${ tabStyle }` );
        group.classList.add( `is-animation-${ animation }` );

        const items = group.querySelectorAll( '.gab-tab-item' );
        const nav   = group.querySelector( '.gab-tabs__nav' );

        if ( ! nav || ! items.length ) return;

        items.forEach( ( item, index ) => {
            const label  = item.dataset.label ?? `Onglet ${ index + 1 }`;
            const button = document.createElement( 'button' );

            button.className   = 'gab-tabs__nav-btn';
            button.textContent = label;
            button.setAttribute( 'role', 'tab' );
            button.setAttribute( 'aria-selected', 'false' );

            button.addEventListener( 'click', () => activateTab( group, index ) );
            nav.appendChild( button );
        } );

        activateTab( group, defaultTab );
    } );
}

/**
 * Active un onglet et masque les autres.
 *
 * @param {HTMLElement} group - Le bloc parent gab/tabs
 * @param {number}      index - L'index de l'onglet à activer
 */
function activateTab( group, index ) {
    const items   = group.querySelectorAll( '.gab-tab-item' );
    const buttons = group.querySelectorAll( '.gab-tabs__nav-btn' );
    const panels  = group.querySelectorAll( '.gab-tab-item__panel' );

    buttons.forEach( ( btn ) => {
        btn.setAttribute( 'aria-selected', 'false' );
        btn.classList.remove( 'is-active' );
    } );

    panels.forEach( ( panel ) => {
        panel.setAttribute( 'hidden', '' );
        // Retire la classe d'animation pour permettre de la rejouer au prochain clic
        panel.classList.remove( 'is-entering' );
    } );

    const safeIndex = index < items.length ? index : 0;

    if ( buttons[ safeIndex ] ) {
        buttons[ safeIndex ].setAttribute( 'aria-selected', 'true' );
        buttons[ safeIndex ].classList.add( 'is-active' );
    }

    if ( panels[ safeIndex ] ) {
        panels[ safeIndex ].removeAttribute( 'hidden' );
        // Force le reflow avant d'ajouter la classe — sinon l'animation ne se rejoue pas
        void panels[ safeIndex ].offsetWidth;
        panels[ safeIndex ].classList.add( 'is-entering' );
    }
}

document.addEventListener( 'DOMContentLoaded', initTabs );