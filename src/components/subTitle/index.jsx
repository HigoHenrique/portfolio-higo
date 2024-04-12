import Button from "../button/button";
import { socialMedia } from "../../constants/links";

export default function SubTitle() {
    return (
        <div className={"lg:mt-6 lg:text-lg lg:leading-8 text-md my-4 leading-4 flex flex-row justify-center align-middle"}>
            {socialMedia.map((item) => {
                return (
                    <Button
                        key={item.name}
                        name={item.name}
                        link={item.link}
                        color={item.color}
                        secondColor={item.secondColor}
                        icon={item.icon}
                    />
                )
            })}
        </div>
    )
};
