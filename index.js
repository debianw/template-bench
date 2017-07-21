const ect = require('ect');
const handlebars = require('handlebars');
const tickets = require('./data/tickets');
const _ = require('lodash');
const dot = require('dot');
const ejs = require('ejs');

//
const renderWithECT = (str, data = {}) => {
  console.time('render-with-ect');
  const ectRenderer = ect({ root: { layout: str, page: '<% extend "layout" %>'} });
  const parsedTemplate = ectRenderer.render('page', data);
  console.timeEnd('render-with-ect');

  return parsedTemplate;
};

const renderWithHandlebars = (str, data = {}) => {
  console.time('render-with-handlebars');
  const template = handlebars.compile(str);
  const parsedTemplate = template(data);
  console.timeEnd('render-with-handlebars');

  return parsedTemplate;
};

const renderWithLodash = (str, data = {}) => {
  console.time('render-with-lodash');
  const template = _.template(str);
  const parsedTemplate = template(data);
  console.timeEnd('render-with-lodash');

  return parsedTemplate;
};

const renderWithDot = (str, data = {}) => {
  console.time('render-with-dot');
  const template = dot.template(str);
  const parsedTemplate = template(data);
  console.timeEnd('render-with-dot');

  return parsedTemplate;
};

const renderWithEJS = (str, data = {}) => {
  console.time('render-with-ejs');
  const parsedTemplate = ejs.render(str, data); 
  console.timeEnd('render-with-ejs');

  return parsedTemplate;
};


const runECT = () => {
  const str = "<div><ul><% for ticket in @docs : %><li><h3>Ticket #<%- ticket.number %></h3><% for invoice in ticket.invoices : %><br><div>Invoice<br><span>-------------</span><br><strong>Status: </strong><%- invoice.status %><br><strong>Paid: </strong>$<%- invoice.paid %><h4>Items:</h4><ol><% for item in invoice.items : %><div><strong>Name: </strong><%- item.name %></div><div><strong>Description: </strong><%- item.description %></div><% end %></div><% end %><hr></li><% end %></ul></div>";
  renderWithECT(str, tickets);
};

const runHandlebars = () => {
  const str = "<div><ul>{{#each docs}}<li><h3>Ticket #{{number}}</h3>{{#each invoices}}<br><div>Invoice<br><span>-------------</span><br><strong>Status: </strong>{{status}}<br><strong>Paid: </strong>{{paid}}<h4>Items:</h4><ol>{{#each items}}<div><strong>Name: </strong>{{name}}</div><div><strong>Description: </strong>{{description}}</div>{{/each}}</div>{{/each}}<hr></li>{{/each}}</ul></div>";
  renderWithHandlebars(str, tickets);
};

const runWithLodash = () => {
  const str = "<div><ul><% _.forEach(docs, ticket => { %><li><h3>Ticket #<%- ticket.number %></h3><% _.forEach(ticket.invoices, invoice => { %><br><div>Invoice<br><span>-------------</span><br><strong>Status: </strong><%- invoice.status %><br><strong>Paid: </strong>$<%- invoice.paid %><h4>Items:</h4><ol><% _.forEach(invoice.items, item => { %><div><strong>Name: </strong><%- item.name %></div><div><strong>Description: </strong><%- item.description %></div><% }); %></div><% }); %><hr></li><% }); %></ul></div>";
  renderWithLodash(str, tickets);
};

const runWithDot = () => {
  const str = "<div><ul>{{~it.docs :ticket}}<li><h3>Ticket #{{=ticket.number}}</h3>{{~ticket.invoices :invoice}}<br><div>Invoice<br><span>-------------</span><br><strong>Status: </strong>{{=invoice.status}}<br><strong>Paid: </strong>{{=invoice.paid}}<h4>Items:</h4><ol>{{~invoice.items :item}}<div><strong>Name: </strong>{{=item.name}}</div><div><strong>Description: </strong>{{=item.description}}</div>{{~}}</div>{{~}}<hr></li>{{~}}</ul></div>";
  renderWithDot(str, tickets);
};

const runWithEJS = () => {
  const str = "<div><ul><% docs.forEach(ticket => { %><li><h3>Ticket #<%= ticket.number %></h3><% ticket.invoices.forEach(invoice => { %><br><div>Invoice<br><span>-------------</span><br><strong>Status: </strong><% invoice.status %><br><strong>Paid: </strong><% invoice.paid %><h4>Items:</h4><ol><% invoice.items.forEach(item => { %><div><strong>Name: </strong><%= item.name %></div><div><strong>Description: </strong><%= item.description %></div><% }) %></div><% }) %><hr></li><% }) %></ul></div>";
  renderWithEJS(str, tickets);
};

const runPlate = () => {
  const str = "<div><ul><% for ticket in @docs : %><li><h3>Ticket #<%- ticket.number %></h3><% for invoice in ticket.invoices : %><br><div>Invoice<br><span>-------------</span><br><strong>Status: </strong><%- invoice.status %><br><strong>Paid: </strong>$<%- invoice.paid %><h4>Items:</h4><ol><% for item in invoice.items : %><div><strong>Name: </strong><%- item.name %></div><div><strong>Description: </strong><%- item.description %></div><% end %></div><% end %><hr></li><% end %></ul></div>";
  renderWithECT(str, tickets);
};

runECT();
runHandlebars();
runWithLodash();
runWithDot();
runWithEJS();

