import React from "react";

const Card = props => (
  <div className="card text-center">
    <div className="card-header">
      <h2>{props.heading}</h2>
    </div>
    <div className="card-body">{props.children}</div>
  </div>
//   <div className="school results-card" data-school-id="196255" data-compare="false">
//   <span data-bind="school_container"></span>
//   <div className="content-box">
//     <div className="investigation-major-wrapper" data-bind="under_investigation" aria-hidden="true">
//       <a>
//         <p className="investigation-major" aria-describedby="tip-hcm2" tabindex="0" data-bind="branch_campus" data-definition="default">
//           Under ED Monitoring <i className="fa fa-info-circle"></i>
//         </p>
//       </a>
//     </div>

//     <div className="results-card-headings">
//       <div className="compare-wrapper">
//         <h1 data-bind="title"><a className="link" href="/school/?196255-SUNY-Downstate-Medical-Center">SUNY Downstate Medical Center</a></h1>
//         <div className="compare-school">
//           <button type="button" className="button button-compare_schools" data-bind="selected_school" aria-label="Add to Compare" data-school="compare-schools" aria-pressed="" data-school-id="196255" data-school-name="SUNY Downstate Medical Center" aria-describedby="tip-compare-add">
// <i className="fa fa-star tooltip-target"></i>
// <span className="sr-only">Add to Compare</span>
// </button>
//         </div>
//       </div>
//       <ul className="school-info">
//         <li className="location">
//           <span data-bind="city">Brooklyn</span>,
//           <span data-bind="state">NY</span>
//         </li>
//         <li>
//           <span data-bind="size_number">338</span> undergraduates
//         </li>
//       </ul>
//     </div>

//     <div className="school-meters">

//       <figure className="meter">
//         <h2 className="figure-heading constrain_width" aria-describedby="tip-avg-cost-year" tabindex="0">
//           Average<br/>Annual Cost
//           <span className="tooltip-target u-new_line">
//             <i className="fa fa-info-circle"></i>
//           </span>
//         </h2>
//         <picc-meter className="cost no_data" data-bind="average_cost_meter" max="100000" value="" degree="3">
//         <div className="picc-meter-bar" styles={{display: "none"}}></div></picc-meter>
//         <figcaption>
//           <span data-bind="average_cost">--</span>
//         </figcaption>
//       </figure>

//       <figure className="meter">
//         <h2 className="figure-heading constrain_width" aria-describedby="tip-graduation-rate" tabindex="0">
//           Graduation <br/>Rate
//           <span className="tooltip-target u-new_line">
//             <i className="fa fa-info-circle"></i>
//           </span>
//         </h2>
//         <picc-meter className="graduation no_data" data-bind="grad_rate_meter" max="1" value="" degree="3">
//         <div className="picc-meter-bar" styles={{display: "none"}}></div></picc-meter>
//         <figcaption>
//           <span data-bind="grad_rate">--</span>
//         </figcaption>
//       </figure>

//       <figure className="meter">
//         <h2 className="figure-heading constrain_width" aria-describedby="tip-avg-salary" tabindex="0" data-bind="branch_campus" data-definition="default">
//           Salary After<br/>Attending
//           <span className="tooltip-target u-new_line">
//             <i className="fa fa-info-circle"></i>
//           </span>
//         </h2>
//         <picc-meter className="earnings" data-bind="average_salary_meter" max="100000" value="127900" degree="3">
//         <div className="picc-meter-bar" styles={{height: "100%"}}></div></picc-meter>
//         <figcaption>
//           <span data-bind="average_salary">$127,900</span>
//         </figcaption>
//       </figure>
//     </div>

//     <a className="link link-more" data-bind="more_link" href="/school/?196255-SUNY-Downstate-Medical-Center">
//       View more details <i className="fa fa-chevron-right"></i>
//     </a>
//   </div>
// </div>
);

export default Card;
