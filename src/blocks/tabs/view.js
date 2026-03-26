/**
 * Initialise tous les groupes d'onglets présents dans la page.
 */
function initTabs() {
    const tabGroups = document.querySelectorAll( '.wp-block-gab-tabs' );

    tabGroups.forEach( ( group ) => {
        const defaultTab = parseInt( group.dataset.defaultTab ?? '0', 10 );
        // Applique le style comme classe CSS sur le bloc — le SCSS fait le reste
        const tabStyle   = group.dataset.tabStyle ?? 'underline';
        group.classList.add( `is-style-${ tabStyle }` );
        const items      = group.querySelectorAll( '.gab-tab-item' );
        const nav        = group.querySelector( '.gab-tabs__nav' );

        if ( ! nav || ! items.length ) return;

        // Construit les boutons de navigation à partir des data-label de chaque item
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

        // Active l'onglet par défaut défini dans l'éditeur
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

    // Réinitialise tous les états
    buttons.forEach( ( btn ) => {
        btn.setAttribute( 'aria-selected', 'false' );
        btn.classList.remove( 'is-active' );
    } );

    panels.forEach( ( panel ) => {
        panel.setAttribute( 'hidden', '' );
    } );

    // Active l'onglet cible — fallback sur 0 si l'index est hors limites
    const safeIndex = index < items.length ? index : 0;

    if ( buttons[ safeIndex ] ) {
        buttons[ safeIndex ].setAttribute( 'aria-selected', 'true' );
        buttons[ safeIndex ].classList.add( 'is-active' );
    }

    if ( panels[ safeIndex ] ) {
        panels[ safeIndex ].removeAttribute( 'hidden' );
    }
}

document.addEventListener( 'DOMContentLoaded', initTabs );