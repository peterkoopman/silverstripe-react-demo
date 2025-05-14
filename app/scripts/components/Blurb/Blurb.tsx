import React from 'react';
import style from './Blurb.module.css';

const Blurb = () => {
  return (
    <section className={style.blurb}>
      <div className="container">
        <h2 data-testid="heading" className={style.heading}>
          Get the job done with the right equipment
        </h2>
        <div data-testid="summary" className={style.summary}>
          <p>
            With an extensive network throughout New Zealand and Australia, the
            level of expertise gained and held by Hydraulink in key industry
            sectors is vast. If you are involved in mining, agriculture,
            transport, forestry, the marine industry or any industry that needs
            fast, effective and reliable hose and hydraulic services - we can
            help you get the job done no matter how much pressure you're under.
            Give us a call and see for yourself!
          </p>
        </div>
      </div>
    </section>
  );
};

export default Blurb;
