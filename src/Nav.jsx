import React from 'react'

function Nav() {
  return (
      <div class="sticky-top bg-primary">
    <header class="d-flex justify-content-center py-3">
      <ul class="nav nav-pills">
        <li class="nav-item"><a href="/" class="nav-link text-dark" aria-current="page">Home</a></li>
        <li class="nav-item"><a href="/product" class="nav-link text-dark">Products</a></li>
        <li class="nav-item"><a href="/product/addproduct" class="nav-link text-dark">AddProduct</a></li>
        <li class="nav-item"><a href="#" class="nav-link text-dark">FAQs</a></li>
        <li class="nav-item"><a href="#" class="nav-link text-dark">About</a></li>
      </ul>
    </header>
  </div>
  )
}

export default Nav
