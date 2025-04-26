export function ProfilePreview(profile, options = {}) {
  const { showAdditionalInfo = false } = options;

  const preview = document.createElement("aside");

  const picture = document.createElement("img");
  picture.src = profile.pictureSrc;
  picture.alt = "";
  picture.dataset.testid = "profilePicture";

  const name = document.createElement("p");
  name.textContent = profile.name;
  name.dataset.testid = "profileName";

  const bio = document.createElement("p");
  bio.textContent = profile.bio;
  bio.dataset.testid = "profileBio";

  preview.appendChild(picture);
  preview.appendChild(name);
  preview.appendChild(bio);

  // TODO: If showAdditionalInfo is true, add a new <p> with "Click to view full profile"
  // ✅ ADDITIONAL INFO implementation
  if (showAdditionalInfo) {
    const additionalInfo = document.createElement("p");
    additionalInfo.textContent = "Click to view full profile";
    preview.appendChild(additionalInfo);
  }
  return preview;
}
