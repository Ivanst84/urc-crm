import Heading from "@/components/ui/Heading";
import AddMemberForm from "@/components/member/AddMemberForm";
import MemberForm from "@/components/member/MemberForm";
export default function CreateMemberPage(){
    return (
        <>
            <Heading>Nuevo Miembro</Heading>

         <AddMemberForm>
            <MemberForm/>
         </AddMemberForm>
        </>
    );
}