import photoDevice from './images/photo-device.png';
import photoDataPlate from './images/photo_data_plate.png';

type Field = { label: string; value: string };
type TableData = {
  title: string;
  count: number;
  headers: string[];
  rows: (string | number)[][];
  hasFooter?: boolean;
};

const photosToRender = [
  { title: 'Photo_device', src: photoDevice },
  { title: 'Photo_data_plate', src: photoDataPlate },
];

const fields: Field[] = [
  { label: 'Brand', value: 'NEC' },
  { label: 'Model/Series', value: 'P401W' },
  { label: 'Devise P/N', value: 'NP-P401W / NP23LP+' },
  { label: 'Dev. Type', value: '2013,4000,1280,16:10,LCD' },
  { label: 'RNK', value: '237' },
  { label: 'Min Price', value: '57,19' },
  { label: 'Max Price', value: '100,97' },
  { label: 'Quantity', value: '3 376' },
  { label: 'EPrq', value: '65' },
  { label: 'EA4q', value: '6' },
  { label: 'Photo_device6', value: 'https://drive.google.com...' },
  { label: 'Sku', value: '???/P,Ne_P401W/??G112082' },
  { label: 'L-User', value: 'Iryna' },
  { label: 'Category', value: 'Projector' },
  { label: 'E-User', value: 'Script' },
  { label: 'Green_id', value: 'Y' },
  { label: 'Edit_at', value: '30.8.2024 12:32' },
  { label: 'Create_at', value: '30.8.2024 12:32' },
  { label: 'Amazon Listing Src', value: 'https://www.amazon.com...' },
  { label: 'ELCCq', value: '0' },
  { label: 'Amazq', value: '9' },
  { label: 'Notes', value: '--------------------' },
];

const tables: TableData[] = [
  {
    title: 'List Location',
    count: 6,
    headers: [
      'ID',
      'Brand',
      'Category',
      'Device P/N',
      'Qty',
      'Condition',
      'Edit User',
      'Notes',
    ],
    rows: Array(4).fill([
      'G112082',
      'NEC',
      'Projectors',
      'CP34B',
      52,
      'U/Ref',
      'Script',
      'No Lamp',
    ]),
  },
  {
    title: 'List Ebay Vision Listings',
    count: 53,
    headers: [
      'Listing_id',
      'SKU',
      'Condition_id',
      'Product_id',
      'Title',
      'Price',
      'Listing_qty',
      'Inventory_q',
    ],
    rows: Array(4).fill([
      '325064386872',
      'SRQ/P,Ne_ME331X...',
      'UEG122535',
      'G122535',
      '3300 ANSI 3LCD Projector 1080p...',
      114.27,
      274,
      3376,
    ]),
  },
  {
    title: 'Same Products',
    count: 1,
    headers: ['Original_id', 'Same_id', 'Fk_edit_employee'],
    rows: [['G112082', 'G900559', 'Script']],
    hasFooter: true,
  },
];

function renderFields() {
  const container = document.querySelector('.product-edit__fields');
  if (!container) return;

  fields.forEach((f, i) => {
    const div = document.createElement('div');
    div.className = 'field';

    const input = document.createElement('input');
    input.type = 'text';
    input.value = f.value;
    input.className = 'field__value';
    input.name = `field_${i}`;

    const label = document.createElement('label');
    label.className = 'field__label';
    label.textContent = f.label;
    label.htmlFor = input.name;

    div.appendChild(label);
    div.appendChild(input);
    container.appendChild(div);
  });
}

function renderPhotos() {
  const container = document.querySelector('.product-edit__photos');
  if (!container) return;

  photosToRender.forEach(photo => {
    const photoBlock = document.createElement('div');
    photoBlock.className = 'photo-block';

    const titleElement = document.createElement('h3');
    titleElement.className = 'photo-title';
    titleElement.textContent = photo.title;

    const photoWrapper = document.createElement('div');
    photoWrapper.className = 'photo-wrapper';

    const img = document.createElement('img');
    img.src = photo.src;
    img.alt = photo.title;

    photoWrapper.appendChild(img);

    photoBlock.appendChild(titleElement);
    photoBlock.appendChild(photoWrapper);

    container.appendChild(photoBlock);
  });
}

function renderTables() {
  const container = document.querySelector('.product-edit__tables');
  if (!container) return;

  tables.forEach((t, tableIdx) => {
    const titleHeader = document.createElement('h3');
    titleHeader.className = 'table-section-title';
    titleHeader.innerHTML = `
      ${t.title} <span class="table-section-count">${t.count}</span>
    `;
    container.appendChild(titleHeader);

    const block = document.createElement('div');
    block.className = 'table-block';

    const table = document.createElement('table');
    table.className = 'table-block__table';

    const thead = document.createElement('thead');
    const headRow = document.createElement('tr');
    t.headers.forEach(header => {
      const th = document.createElement('th');
      th.textContent = header;
      headRow.appendChild(th);
    });

    const actionTh = document.createElement('th');
    actionTh.textContent = '';
    headRow.appendChild(actionTh);
    thead.appendChild(headRow);
    table.appendChild(thead);

    // Tbody
    const tbody = document.createElement('tbody');
    t.rows.forEach((row, rowIdx) => {
      const tr = document.createElement('tr');
      row.forEach((cell, colIdx) => {
        const td = document.createElement('td');
        const input = document.createElement('input');
        input.type = 'text';
        input.value = String(cell);
        input.className = 'table-input';
        input.name = `table${tableIdx}_row${rowIdx}_col${colIdx}`;
        td.appendChild(input);
        tr.appendChild(td);
      });

      const svgTd = document.createElement('td');
      svgTd.className = 'table-action-cell';
      svgTd.innerHTML = `
        <svg class="table-action-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="9 18 15 12 9 6"></polyline>
        </svg>
      `;

      tr.appendChild(svgTd);
      tbody.appendChild(tr);
    });
    table.appendChild(tbody);

    block.appendChild(table);

    if (t.hasFooter) {
      const footer = document.createElement('div');
      footer.className = 'table-block__footer';
      footer.innerHTML = `
        <button class="table-block__btn table-block__btn--expand">Expand</button>
        <button class="table-block__btn table-block__btn--add">Add</button>
      `;
      block.appendChild(footer);
    }

    container.appendChild(block);
  });
}

renderFields();
renderPhotos();
renderTables();

function getProductFormData() {
  const form = document.querySelector('.product-edit') as HTMLFormElement;
  if (!form) return null;

  const fields = Array.from(form.querySelectorAll('.field')).map(field => {
    const label =
      (
        field.querySelector('.field__label') as HTMLElement
      )?.textContent?.trim() || '';
    const input = field.querySelector('.field__value') as HTMLInputElement;
    const value = input?.value || '';
    return { label, value };
  });

  const photos = Array.from(
    form.querySelectorAll('.product-edit__photos img')
  ).map(img => ({
    src: (img as HTMLImageElement).src,
    alt: (img as HTMLImageElement).alt,
  }));

  return {
    fields,
    photos,
  };
}

const productData = getProductFormData();
console.log(productData);
