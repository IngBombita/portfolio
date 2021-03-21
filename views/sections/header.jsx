import React from 'react';

export const Header = () => (
  <>
    <header className="masthead">
      <div className="container h-100">
        <div className="row h-100 align-items-center justify-content-center text-center">
          <div className="col-lg-10 align-self-end">
            <h1 className="brand-title cream-color">Fika</h1>
            <hr className="divider my-4" />
          </div>
          <div className="col-lg-8 align-self-baseline">
            <p className="text-white-75 font-weight-bold mb-5">
            En Fika nos apasionan las tradiciones y la calidad de los productos para el regocijo de nuestros clientes.
            Tanto el café como el pan han sufrido alteraciones en su proceso a través del tiempo, para hacerlos más industriales,
            económicos y a veces, arruinándolos por completo. Nosotros desde lo artesanal queremos combatir esta tendencia. </p>
            <a className="btn btn-primary btn-xl js-scroll-trigger coffee-color" href="#about">Averigua mas sobre nosotros</a>
          </div>
        </div>
      </div>
    </header>
  </>
);
