import shlomoProfile from "../images/shlomo-profile-pic.jpeg"
import mosheProfile from "../images/moshe-profile-pic.jpeg"

export default function AboutUs() {
  return (
    <div dir="rtl" className="bg-light-indigo d-flex flex-column align-items-center justify-content-center">
      <div className="text-center m-2 fs-4 p-5">
        הקמנו את האתר מכיוון ששנינו הורים לילדים קטנים ושמנו לב שהרבה פעמים אנחנו שומעים על כמה שהילד לא מתפתח מספיק מכל מיני אנשים לא מוסמכים וחשבנו שיהיה נחמד אם תהיה אפשרות נגישה לקבל מידע מהימן על התפתחות ילדינו
      </div>
      <div className="container d-flex flex-md-row flex-column align-items-center justify-content-evenly mb-2">
        <div class="info-card mb-3 m-md-0">
          <img src={shlomoProfile} alt="" />
          <div class="small-description fs-2 fw-bold">שלמה סלומון</div>
          <div class="big-description">Big description</div>
        </div>
        <div class="info-card">
          <img src={mosheProfile} alt="" />
          <div class="small-description fs-2 fw-bold">משה דיימונד</div>
          <div class="big-description">Big description</div>
        </div>
      </div>
    </div>
  )
}