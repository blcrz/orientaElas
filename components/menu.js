class menu extends HTMLElement {
    constructor(){
        super()
        this.build()
    }

    build(){
        const shadow = this.attachShadow({mode:'open'})

        shadow.innerHTML = `
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
        `
        shadow.appendChild(this.style())

        const menu = this.createMenu()

        shadow.appendChild(menu)
    }

    createMenu() {
        const nav = document.createElement('nav')
        nav.className = 'navbar navbar-expand-lg navbar-light bg-light pb-0 pt-0'

        const div = document.createElement('div')
        div.classList.add('container-fluid')

        //logo do menu

        const a = document.createElement('a')
        a.classList.add('navbar-brand')
        a.href = '#'

        const img = document.createElement('img')
        img.classList.add('nav-logo')
        const path = this.getAttribute('path-img-logo')
        const pathImg = path ? path : '../view/assets/'
        img.src = `${pathImg}logotipo.png`

        a.appendChild(img)

        // hamburger

        const button = document.createElement('button')
        button.classList.add('navbar-toggler')
        button.type = 'button'
        button.setAttribute('data-bs-toggle', 'collapse')
        button.setAttribute('data-bs-target', '#navbarSupportedContent')
        button.setAttribute('aria-controls', 'navbarSupportedContent')
        button.setAttribute('aria-expanded', 'false')
        button.setAttribute('aria-label', 'Toggle navigation')
        button.id = 'hamburger'
        button.addEventListener('click', this.toggleMenu.bind(this))

        const span = document.createElement('span')
        span.classList.add('navbar-toggler-icon')

        button.appendChild(span)

        // itens do menu

        const divCollapse = document.createElement('div')
        divCollapse.className = 'collapse navbar-collapse'
        divCollapse.id = 'navbarSupportedContent'

        const ul = document.createElement('ul')
        ul.className = 'navbar-nav mb-2 mb-lg-0'

        const li1 = document.createElement('li')
        li1.classList.add('nav-item')

        const ali1 = document.createElement('a')
        ali1.classList.add('nav-link')
        ali1.innerHTML = 'benefícios'
        ali1.href = '#'

        li1.appendChild(ali1)
        ul.appendChild(li1)

        const li2 = document.createElement('li')
        li2.classList.add('nav-item')

        const ali2 = document.createElement('a')
        ali2.classList.add('nav-link')
        ali2.innerHTML = 'sobre'
        ali2.href = '#'

        li2.appendChild(ali2)
        ul.appendChild(li2)

        const li3 = document.createElement('li')
        li3.classList.add('nav-item')

        const ali3 = document.createElement('a')
        ali3.classList.add('nav-link')
        ali3.innerHTML = 'quem somos'
        ali3.href = '#'

        li3.appendChild(ali3)
        ul.appendChild(li3)

        const showButton = parseInt(this.getAttribute('show-register-button'))

        if (showButton) {
            const li4 = document.createElement('li')
            li4.classList.add('nav-item')

            const buttonLi4 = document.createElement('button')
            buttonLi4.className = 'btn nav-button'
            buttonLi4.innerHTML = 'login/cadastro'

            li4.appendChild(buttonLi4)
            ul.appendChild(li4)
        }

        // adicionando todos os elementos no navbar

        divCollapse.appendChild(ul)

        div.appendChild(a)
        div.appendChild(button)
        div.appendChild(divCollapse)

        nav.appendChild(div)

        return nav
    }

    toggleMenu() {
        const options = this.shadowRoot.getElementById('navbarSupportedContent')

        if (options.classList.contains('show')) {
            options.classList.remove('show')
        } else {
            options.classList.add('show')
        }
    }

    style(){
        const style = document.createElement('style')
        style.textContent = `
        .nav-logo {
            width: 15vh
        }

        .nav-button {
            background-color: #975AB6;
            color: #fff;
            border-radius: 10px;
        }

        .navbar-collapse{
            justify-content: end !important;
        }`
        return style
    }
}
customElements.define('nav-bar', menu)