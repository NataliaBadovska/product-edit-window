"use strict";
const leftFields = [
    { label: 'Brand', value: 'NEC', link: true },
    { label: 'Model/Series', value: 'P401W' },
    { label: 'Devise P/N', value: 'NP-P401W / NP23LP+' },
    { label: 'Dev. Type', value: '2013,4000,1280,16:10,LCD' },
    { label: 'RNK', value: '237' },
    { label: 'Min Price', value: '57,19' },
    { label: 'Max Price', value: '100,97' },
    { label: 'Quantity', value: '3 376' },
    { label: 'EPrq', value: '65' },
    { label: 'EA4q', value: '6' },
    { label: 'Photo_device', value: 'https://drive.google.com', link: true },
];
const rightFields = [
    { label: 'Sku', value: '???/P,Ne_P401W/??G112082', link: true },
    { label: 'L-User', value: 'Iryna', link: true },
    { label: 'Category', value: 'Projector' },
    { label: 'E-User', value: 'Script', link: true },
    { label: 'Green_id', value: 'Y' },
    { label: 'Edit_at', value: '30.8.2024 12:32' },
    { label: 'Create_at', value: '30.8.2024 12:32' },
    { label: 'Amazon Listing Src', value: 'https://www.amazon.com', link: true },
    { label: 'ELCCq', value: '0' },
    { label: 'Amazq', value: '9' },
    { label: 'Notes', value: '----------' },
];
function createColumn(fields) {
    const column = document.createElement('div');
    column.className = 'device-card__column';
    fields.forEach(f => {
        const item = document.createElement('div');
        item.className = 'device-card__item';
        const label = document.createElement('span');
        label.className = 'device-card__label';
        label.textContent = f.label;
        const value = document.createElement('span');
        value.className = 'device-card__value';
        if (f.link && f.value.startsWith('http')) {
            const a = document.createElement('a');
            a.href = f.value;
            a.textContent = 'посилання';
            value.appendChild(a);
        }
        else {
            value.textContent = f.value;
        }
        if (f.link) {
            const icon = document.createElement('span');
            icon.className = 'device-card__icon';
            icon.textContent = '↗';
            value.appendChild(icon);
        }
        item.appendChild(label);
        item.appendChild(value);
        column.appendChild(item);
    });
    return column;
}
const grid = document.getElementById('deviceGrid');
if (grid) {
    grid.appendChild(createColumn(leftFields));
    grid.appendChild(createColumn(rightFields));
}
