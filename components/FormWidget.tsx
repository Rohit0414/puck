import React, { useState } from 'react';

const FormWidget = () => {
  // State to store the list of fields
  const [fields, setFields] = useState([]);

  // Function to add a new field with default properties
  const addField = () => {
    setFields([...fields, { label: '', type: 'textbox' }]);
  };

  // Function to update a field's property (label or type)
  const updateField = (index, key, value) => {
    const updatedFields = fields.map((field, idx) =>
      idx === index ? { ...field, [key]: value } : field
    );
    setFields(updatedFields);
  };

  return (
    <div style={{ border: '1px solid #ccc', padding: '1rem' }}>
      {/* Preview area: displays the form as it would appear */}
      <div className="form-preview">
        {fields.map((field, index) => (
          <div key={index} className="form-field">
            <label>{field.label || 'Field'}</label>
            {field.type === 'textbox' && (
              <input type="text" placeholder="Textbox" readOnly />
            )}
            {field.type === 'radio' && <input type="radio" readOnly />}
            {field.type === 'checkbox' && <input type="checkbox" readOnly />}
          </div>
        ))}
      </div>

      {/* Properties panel: controls for adding and configuring fields */}
      <div className="form-properties">
        <button onClick={addField}>Add Field</button>
        {fields.map((field, index) => (
          <div key={index} className="field-properties">
            <input
              type="text"
              placeholder="Field Label"
              value={field.label}
              onChange={(e) => updateField(index, 'label', e.target.value)}
            />
            <select
              value={field.type}
              onChange={(e) => updateField(index, 'type', e.target.value)}
            >
              <option value="textbox">Textbox</option>
              <option value="radio">Radio Button</option>
              <option value="checkbox">Checkbox</option>
              {/* Add more options if needed */}
            </select>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FormWidget;
