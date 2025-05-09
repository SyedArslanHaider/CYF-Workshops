# Conditional Rendering

This component is currently a profile preview showing a person's image and name.
The argument profile is an object of form:

```
{
    pictureSrc : String,
    name : String,
    bio : String
}
```

## Task for Person 1

Create and switch to a new branch named `preview-not-available`:

```
git switch -c preview-not-available
```

Unskip the tests describing the available option. Update the component so that it takes an optional options argument which is an object that contains the available property. Check the tests to see how the `options` object is passed to the `ProfilePreview` component. When this property is false, the preview should not render any information other than a text saying "Profile preview unavailable". When this property is true, continue to render the profile as before. By default, available should be true.

## Task for Person 2

Create and switch to a new branch named `preview-short-form`:

```
git switch -c preview-short-form
```

Unskip the tests describing the short form option. Update the component so that it takes an optional options argument which is an object that contains the shortForm property. Check the tests to see how the `options` object is passed to the `ProfilePreview` component. When this property is false, continue to render all the profile information. When this property is true, render all the profile information other than the bio. By default shortForm should be false.




## Task for Person 3
Create and switch to a new branch named preview-additional-info:

bash
Copiar
Editar
git switch -c preview-additional-info
Update the component so that it takes an optional options argument which is an object that contains the showAdditionalInfo property.
When this property is true, the component should render an extra paragraph below the bio that says "Click to view full profile".
When this property is false or missing, the extra paragraph should not be added.
By default, showAdditionalInfo should be false.

You will also need to add new tests that check:

The paragraph "Click to view full profile" appears when showAdditionalInfo is true.

The paragraph is absent when showAdditionalInfo is false or missing.
