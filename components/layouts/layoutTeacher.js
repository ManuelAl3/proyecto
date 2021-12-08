import LayoutTeacher from "../navbars/navbarTeacher";
import Head from 'next/head';

export default function Layout({ children, title, description, props }) {
  return (
    <>
      <Head>
        <link
          href="https://unpkg.com/boxicons@2.0.7/css/boxicons.min.css"
          rel="stylesheet"
        />
        {/* GOOGLE FONTS */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Raleway:wght@100&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://unpkg.com/boxicons@2.0.7/css/boxicons.min.css"
          rel="stylesheet"
        />
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous" />

        <title> {title} </title>
      </Head>

      <main className="drawer-open-left">
        <LayoutTeacher />
        {children}
        {/*SCRIPTS*/}
        <script src="/javascripts/particles.min.js"></script>
        <script src="/javascripts/particles.min.js"></script>
        <script src="/javascripts/app-particles.js"></script>
        <script src="/javascripts/register.js"></script>
        <script src="/javascripts/navbar.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
        {/* FONT AWESOME */}
        <script
          src="https://kit.fontawesome.com/6f85729b61.js"
          crossorigin="anonymous"
        ></script>
      </main>
    </>
  );
}
