const SideNavFunction = {}

// if (sideNavigation === null) return

SideNavFunction.addIconClickEventListeners = () => {
  const navIcons = [...document.querySelectorAll(".sidenav__icon")]
  const closeBtn = document.querySelector(".close-nav")

  navIcons.forEach(icon => {
    icon.addEventListener("click", SideNavFunction.toogleTheMenu)
  })

  closeBtn.addEventListener("click", SideNavFunction.closeTheMenu)
}

SideNavFunction.closeTheMenu = () => {
  const sideNavigation = document.querySelector(".sidenav")
  const navInsideMenus = [...document.querySelectorAll(".sidenav__inside ul")]
  const navIcons = [...document.querySelectorAll(".sidenav__icon")]

  sideNavigation.classList.remove("menu-active-open")
  sideNavigation.dataset.active = ""
  navInsideMenus.forEach(inside => {
    inside.classList.remove("active-inside-menu")
    SideNavFunction.slideTheItemsOut(inside)
  })
  navIcons.forEach(icon => {
    icon.classList.remove("active-icon")
  })
}

SideNavFunction.toogleTheMenu = event => {
  const sideNavigation = document.querySelector(".sidenav")
  const navInsideMenus = [...document.querySelectorAll(".sidenav__inside ul")]
  const navIcons = [...document.querySelectorAll(".sidenav__icon")]

  const clickedDiv =
    event.target.tagName === "DIV" ? event.target : event.target.parentElement
  if (
    sideNavigation.classList.contains("menu-active-open") &&
    sideNavigation.dataset.active === event.target.dataset.slug
  ) {
    sideNavigation.classList.remove("menu-active-open")
    sideNavigation.dataset.active = ""
    navInsideMenus.forEach(inside => {
      inside.classList.remove("active-inside-menu")
      SideNavFunction.slideTheItemsOut(inside)
    })
    navIcons.forEach(icon => {
      icon.classList.remove("active-icon")
    })
  } else {
    sideNavigation.classList.add("menu-active-open")
    sideNavigation.dataset.active = event.target.dataset.slug
    SideNavFunction.addInsideMenuClass()
    navIcons.forEach(icon => {
      icon.classList.remove("active-icon")
    })
    clickedDiv.classList.add("active-icon")
  }
}

SideNavFunction.addInsideMenuClass = () => {
  const sideNavigation = document.querySelector(".sidenav")
  const navInsideMenus = [...document.querySelectorAll(".sidenav__inside ul")]

  navInsideMenus.forEach(inside => {
    if (inside.dataset.slug === sideNavigation.dataset.active) {
      inside.classList.add("active-inside-menu")
      SideNavFunction.slideTheItemsIn()
    } else {
      inside.classList.remove("active-inside-menu")
      SideNavFunction.slideTheItemsOut(inside)
    }
  })
}

SideNavFunction.slideTheItemsIn = () => {
  const navInsideMenus = [...document.querySelectorAll(".sidenav__inside ul")]

  navInsideMenus.forEach(inside => {
    if (inside.classList.contains("active-inside-menu")) {
      const Items = [...inside.querySelectorAll(".nav-link-sub")]
      Items.forEach((item, index) => {
        if (!item.classList.contains("sub-item-active")) {
          setTimeout(function() {
            item.classList.add("sub-item-active")
          }, (index + 1) * 200)
        }
      })
    } else {
      SideNavFunction.slideTheItemsOut(inside)
    }
  })
}

SideNavFunction.slideTheItemsOut = insideMenu => {
  const Items = [...insideMenu.querySelectorAll(".nav-link-sub")]
  Items.forEach(item => {
    item.classList.remove("sub-item-active")
  })
}

export default SideNavFunction
