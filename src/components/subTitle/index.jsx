import Button from "../button/button";
import socialMedia from "@/constants/links.json"

export default function SubTitle() {
    return (
        <div className="mt-6 text-lg leading-8">
            {socialMedia.map((item, index) => {
                return (
                    <Button
                        key={index}
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
