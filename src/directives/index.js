import tooltipDirective from "./Tooltip/tooltip";

// register all directives
const directives = (app) => {
  tooltipDirective(app);
};

export default directives;
