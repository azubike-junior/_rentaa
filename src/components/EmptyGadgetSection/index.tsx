import NoGadgetImage from '../../images/NoGadgets.png';
import Button from '../Button';

export default function EmptyGadgetSection () {
    return (
        <div className="container max-w-7xl flex flex-col items-center my-16 mx-auto px-8">
            <h1 className="text-3xl font-medium mb-9 md:mb-20 w-full">My Gadgets</h1>
            <img src={NoGadgetImage} className="w-36 md:w-full md:max-w-xs"/>
            <p className="hidden md:block my-3 text-center md:text-xl">You have not posted any gadget. Rent out your first Gadget</p>
            <p className="md:hidden my-3 text-center md:text-xl">Nothing to see here...</p>
            <Button
                child="Post a gadget"
                type="button"
                className="px-4 bg-secondary mb-8 mt-6 md:mt-9 py-4 font-dm-sans md:text-lg text-white rounded"
            />
        </div>
    );
}