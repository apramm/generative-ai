"use strict";(self.webpackChunkgatsby_starter_default=self.webpackChunkgatsby_starter_default||[]).push([[524],{72:function(e,t,a){a.d(t,{Z:function(){return s}});var l=a(7294),n=a(1883),r="layout-module--nav-link-item--a5f0a",c="layout-module--nav-link-text--69cda";var s=e=>{let{pageTitle:t,children:a}=e;const s=(0,n.useStaticQuery)("3159585216");return l.createElement("div",{className:"layout-module--container--78b04"},l.createElement("header",{className:"layout-module--site-title--e4dea"},s.site.siteMetadata.title),l.createElement("nav",null,l.createElement("ul",{className:"layout-module--nav-links--1113b"},l.createElement("li",{className:r},l.createElement(n.Link,{to:"/",className:c},"Home")),l.createElement("li",{className:r},l.createElement(n.Link,{to:"/page-2",className:c},"About")),l.createElement("li",{className:r},l.createElement(n.Link,{to:"/blog",className:c},"Blog")))),l.createElement("main",null,l.createElement("h1",{className:"layout-module--heading--f158c"},t),a))}},9357:function(e,t,a){var l=a(7294),n=a(1883);t.Z=e=>{let{title:t}=e;const a=(0,n.useStaticQuery)("3159585216");return l.createElement("title",null,t," | ",a.site.siteMetadata.title)}},1025:function(e,t,a){a.r(t),a.d(t,{Head:function(){return s}});var l=a(7294),n=a(1883),r=a(72),c=a(9357);const s=()=>l.createElement(c.Z,{title:"My Blog Posts"});t.default=e=>{let{data:t}=e;return l.createElement(r.Z,{pageTitle:"My Blog Posts"},t.allMdx.nodes.map((e=>l.createElement("article",{key:e.id},l.createElement("h2",null,l.createElement(n.Link,{to:"/blog/"+e.frontmatter.slug},e.frontmatter.title)),l.createElement("p",null,"Posted: ",e.frontmatter.date)))))}}}]);
//# sourceMappingURL=component---src-pages-blog-index-js-95bed89603d38d06b752.js.map