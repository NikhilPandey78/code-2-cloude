import { deleteContribution } from "./actions";
import styles from "./page.module.css";

type DeleteContributionButtonProps = {
  storedFileName: string;
  metadataFileName: string;
};

export default function DeleteContributionButton({
  storedFileName,
  metadataFileName,
}: DeleteContributionButtonProps) {
  return (
    <form action={deleteContribution} className={styles.deleteForm}>
      <input type="hidden" name="storedFileName" value={storedFileName} />
      <input type="hidden" name="metadataFileName" value={metadataFileName} />
      <button type="submit" className={styles.deleteButton}>
        Delete
      </button>
    </form>
  );
}
