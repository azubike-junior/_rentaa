import ReviewsSection from "../../components/ReviewsSection";
import SettingsSection from "../../components/SettingsSection";
import UserProfileSection from "../../components/UserProfileSection";

const ProfilePage = () => {
    return (
        <div className="mx-auto container w-full pt-4 px-8 grid grid-cols-profileLayoutM xl:grid-cols-profileLayoutL gap-5">
            <section>
                <UserProfileSection />
            </section>
            <section className="flex flex-col gap-9">       
                <SettingsSection />
                <ReviewsSection />
            </section>
        </div>
    );
}
export default ProfilePage;