import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "AWS CLI Cheat Sheet — Essential Commands & Examples 2026 | QuickKit",
  description:
    "The complete AWS CLI cheat sheet. EC2, S3, Lambda, IAM, CloudFormation, and RDS commands with copy-paste examples. Every command you use daily, organized by service.",
  openGraph: {
    title: "AWS CLI Cheat Sheet — Every Command You Need",
    description:
      "EC2, S3, Lambda, IAM, CloudFormation, and RDS commands — organized by workflow. Copy-paste ready.",
    type: "article",
  },
};

interface AwsCommand {
  command: string;
  description: string;
  example?: string;
}

interface AwsSection {
  title: string;
  commands: AwsCommand[];
}

const sections: AwsSection[] = [
  {
    title: "Configuration",
    commands: [
      {
        command: "aws configure",
        description: "Set up AWS credentials, region, and output format",
      },
      {
        command: "aws configure list",
        description: "Show current AWS CLI configuration",
      },
      {
        command: "aws configure set region us-east-1",
        description: "Set default region",
      },
      {
        command: "aws sts get-caller-identity",
        description: "Show current AWS account and identity",
      },
      {
        command: "aws sts get-session-token --duration-seconds 3600",
        description: "Get temporary session token",
      },
    ],
  },
  {
    title: "EC2 (Instances)",
    commands: [
      {
        command: "aws ec2 describe-instances",
        description: "List all EC2 instances",
      },
      {
        command: "aws ec2 describe-instances --filters 'Name=instance-state-name,Values=running'",
        description: "List only running instances",
      },
      {
        command: "aws ec2 describe-instances --instance-ids i-1234567890abcdef0",
        description: "Describe a specific instance",
      },
      {
        command: "aws ec2 start-instances --instance-ids i-1234567890abcdef0",
        description: "Start a stopped instance",
      },
      {
        command: "aws ec2 stop-instances --instance-ids i-1234567890abcdef0",
        description: "Stop a running instance",
      },
      {
        command: "aws ec2 terminate-instances --instance-ids i-1234567890abcdef0",
        description: "Terminate an instance (irreversible)",
      },
      {
        command: 'aws ec2 run-instances --image-id ami-0c55b159cbfafe1f0 --instance-type t2.micro --key-name my-key',
        description: "Launch a new instance",
      },
      {
        command: "aws ec2 describe-images --owners amazon --filters 'Name=name,Values=amzn2-ami-hvm-*'",
        description: "Find Amazon Linux 2 AMIs",
      },
      {
        command: "aws ec2 describe-key-pairs",
        description: "List SSH key pairs",
      },
      {
        command: "aws ec2 describe-security-groups",
        description: "List security groups",
      },
    ],
  },
  {
    title: "EC2 (Volumes & Snapshots)",
    commands: [
      {
        command: "aws ec2 describe-volumes",
        description: "List all EBS volumes",
      },
      {
        command: "aws ec2 describe-snapshots --owner-ids self",
        description: "List your snapshots",
      },
      {
        command: "aws ec2 create-snapshot --volume-id vol-1234567890abcdef0 --description 'Backup'",
        description: "Create a snapshot of a volume",
      },
      {
        command: "aws ec2 wait snapshot-completed --snapshot-ids snap-1234567890abcdef0",
        description: "Wait until snapshot is complete",
      },
      {
        command: "aws ec2 delete-snapshot --snapshot-id snap-1234567890abcdef0",
        description: "Delete a snapshot",
      },
      {
        command: "aws ec2 attach-volume --volume-id vol-xxx --instance-id i-xxx --device /dev/sdf",
        description: "Attach a volume to an instance",
      },
      {
        command: "aws ec2 detach-volume --volume-id vol-xxx",
        description: "Detach a volume",
      },
    ],
  },
  {
    title: "S3 (Storage)",
    commands: [
      {
        command: "aws s3 ls",
        description: "List all S3 buckets",
      },
      {
        command: "aws s3 ls s3://my-bucket",
        description: "List objects in a bucket",
      },
      {
        command: "aws s3 cp file.txt s3://my-bucket/",
        description: "Upload a file to S3",
      },
      {
        command: "aws s3 cp s3://my-bucket/file.txt ./",
        description: "Download a file from S3",
      },
      {
        command: "aws s3 sync ./folder s3://my-bucket/folder",
        description: "Sync a local directory to S3",
      },
      {
        command: "aws s3 sync s3://my-bucket/folder ./folder",
        description: "Sync S3 to a local directory",
      },
      {
        command: "aws s3 rm s3://my-bucket/file.txt",
        description: "Delete an object from S3",
      },
      {
        command: "aws s3 rm s3://my-bucket/folder --recursive",
        description: "Delete all objects in an S3 prefix",
      },
      {
        command: "aws s3 mb s3://my-new-bucket",
        description: "Create a new S3 bucket",
      },
      {
        command: "aws s3 rb s3://my-bucket --force",
        description: "Delete an S3 bucket (must be empty)",
      },
      {
        command: "aws s3api put-bucket-versioning --bucket my-bucket --versioning-configuration Status=Enabled",
        description: "Enable versioning on a bucket",
      },
      {
        command: "aws s3api put-bucket-encryption --bucket my-bucket --server-side-encryption-configuration '{\"Rules\":[{\"ApplyServerSideEncryptionByDefault\":{\"SSEAlgorithm\":\"AES256\"}}]}'",
        description: "Enable default encryption on a bucket",
      },
    ],
  },
  {
    title: "Lambda",
    commands: [
      {
        command: "aws lambda list-functions",
        description: "List all Lambda functions",
      },
      {
        command: "aws lambda get-function --function-name my-function",
        description: "Get details of a specific function",
      },
      {
        command: 'aws lambda invoke --function-name my-function --payload \'{"key":"value"}\' output.json',
        description: "Invoke a Lambda function",
      },
      {
        command: "aws lambda create-function --function-name my-function --runtime python3.12 --role arn:aws:iam::role/lambda-role --handler index.handler --zip-file fileb://function.zip",
        description: "Create a Lambda function from a zip file",
      },
      {
        command: "aws lambda update-function-code --function-name my-function --zip-file fileb://function.zip",
        description: "Update a Lambda function's code",
      },
      {
        command: "aws lambda delete-function --function-name my-function",
        description: "Delete a Lambda function",
      },
      {
        command: "aws logs describe-log-groups --log-group-name-prefix /aws/lambda/my-function",
        description: "View Lambda function logs",
      },
      {
        command: "aws logs get-log-events --log-group-name /aws/lambda/my-function --log-stream-name STREAM_NAME",
        description: "Get log events from a specific stream",
      },
    ],
  },
  {
    title: "IAM (Identity & Access)",
    commands: [
      {
        command: "aws iam list-users",
        description: "List all IAM users",
      },
      {
        command: "aws iam list-roles",
        description: "List all IAM roles",
      },
      {
        command: "aws iam list-policies --scope Local",
        description: "List customer-managed policies",
      },
      {
        command: "aws iam create-user --user-name newuser",
        description: "Create a new IAM user",
      },
      {
        command: "aws iam create-access-key --user-name newuser",
        description: "Generate access keys for a user",
      },
      {
        command: "aws iam attach-user-policy --user-name newuser --policy-arn arn:aws:iam::aws:policy/ReadOnlyAccess",
        description: "Attach a managed policy to a user",
      },
      {
        command: "aws iam create-role --role-name my-role --assume-role-policy-document file://trust-policy.json",
        description: "Create an IAM role from a trust policy",
      },
      {
        command: "aws iam get-account-password-policy",
        description: "View password policy",
      },
    ],
  },
  {
    title: "CloudFormation (IaC)",
    commands: [
      {
        command: "aws cloudformation list-stacks --stack-status-filter CREATE_COMPLETE UPDATE_COMPLETE",
        description: "List active stacks",
      },
      {
        command: "aws cloudformation describe-stacks --stack-name my-stack",
        description: "Get stack details and outputs",
      },
      {
        command: "aws cloudformation create-stack --stack-name my-stack --template-body file://template.json",
        description: "Create a stack from a template",
      },
      {
        command: "aws cloudformation update-stack --stack-name my-stack --template-body file://template.json",
        description: "Update an existing stack",
      },
      {
        command: "aws cloudformation delete-stack --stack-name my-stack",
        description: "Delete a stack",
      },
      {
        command: "aws cloudformation wait stack-delete-complete --stack-name my-stack",
        description: "Wait until stack deletion is complete",
      },
      {
        command: "aws cloudformation describe-stack-events --stack-name my-stack",
        description: "View stack events (useful for debugging failures)",
      },
      {
        command: "aws cloudformation validate-template --template-body file://template.json",
        description: "Validate a template before deploying",
      },
    ],
  },
  {
    title: "RDS (Databases)",
    commands: [
      {
        command: "aws rds describe-db-instances",
        description: "List all RDS instances",
      },
      {
        command: "aws rds describe-db-instances --db-instance-identifier mydb",
        description: "Get details of a specific RDS instance",
      },
      {
        command: "aws rds create-db-instance --db-instance-identifier mydb --db-instance-class db.t3.micro --engine mysql --master-username admin --master-user-password password123",
        description: "Create a new MySQL RDS instance",
      },
      {
        command: "aws rds stop-db-instance --db-instance-identifier mydb",
        description: "Stop an RDS instance (not for Multi-AZ)",
      },
      {
        command: "aws rds start-db-instance --db-instance-identifier mydb",
        description: "Start a stopped RDS instance",
      },
      {
        command: "aws rds delete-db-instance --db-instance-identifier mydb --skip-final-snapshot",
        description: "Delete an RDS instance without a final snapshot",
      },
      {
        command: "aws rds create-db-snapshot --db-instance-identifier mydb --db-snapshot-identifier my-snapshot",
        description: "Create a manual snapshot",
      },
      {
        command: "aws rds describe-db-snapshots --db-instance-identifier mydb",
        description: "List snapshots for an instance",
      },
      {
        command: "aws rds modify-db-instance --db-instance-identifier mydb --db-instance-class db.t3.medium",
        description: "Change instance class (triggers restart)",
      },
    ],
  },
  {
    title: "CloudWatch (Monitoring)",
    commands: [
      {
        command: "aws cloudwatch list-metrics --namespace AWS/EC2",
        description: "List EC2 CloudWatch metrics",
      },
      {
        command: 'aws cloudwatch get-metric-statistics --namespace AWS/EC2 --metric-name CPUUtilization --start-time 2026-01-01T00:00:00Z --end-time 2026-01-01T23:59:59Z --period 3600 --statistics Average --dimensions Name=InstanceId,Value=i-xxx',
        description: "Get CPU utilization for an instance",
      },
      {
        command: "aws logs describe-log-groups",
        description: "List all CloudWatch log groups",
      },
      {
        command: "aws logs describe-log-streams --log-group-name /aws/lambda/my-function --order-by LastEventTime --descending --limit 5",
        description: "Get latest log streams",
      },
      {
        command: "aws cloudwatch put-metric-alarm --alarm-name cpu-high --metric-name CPUUtilization --namespace AWS/EC2 --threshold 80 --comparison-operator GreaterThanThreshold --period 300 --evaluation-periods 2 --statistic Average",
        description: "Create a CPU utilization alarm",
      },
    ],
  },
  {
    title: "Useful One-Liners",
    commands: [
      {
        command: "aws sts get-caller-identity --query Account --output text",
        description: "Get current AWS account ID",
      },
      {
        command: "aws ec2 describe-instances --query 'Reservations[*].Instances[*].[InstanceId,State.Name,PublicIpAddress]' --output table",
        description: "Show instance IDs, states, and IPs in a table",
      },
      {
        command: "aws s3 ls --recursive s3://my-bucket | wc -l",
        description: "Count total objects in a bucket",
      },
      {
        command: 'aws iam simulate-principal-policy --policy-source-arn arn:aws:iam::role/my-role --action-names s3:GetObject --resource-arns arn:aws:s3:::my-bucket/*',
        description: "Check if a role has permission for an action",
      },
      {
        command: "aws pricing get-products --service-code EC2 --filters 'InstanceType=t2.micro' --region us-east-1 --output json | jq '.PriceList[0] | fromjson | .terms.OnDemand'",
        description: "Get on-demand pricing for an instance type",
      },
    ],
  },
];

export default function AwsCheatSheetPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <nav className="text-sm text-slate-400 mb-8">
        <Link href="/" className="hover:text-indigo-600 transition-colors">
          Home
        </Link>
        <span className="mx-2">/</span>
        <Link href="/blog" className="hover:text-indigo-600 transition-colors">
          Blog
        </Link>
        <span className="mx-2">/</span>
        <span className="text-slate-500">AWS CLI Cheat Sheet</span>
      </nav>

      <header className="mb-10">
        <div className="flex items-center gap-3 mb-4">
          <span className="text-xs px-2.5 py-0.5 rounded bg-orange-50 text-orange-800">
            Cloud
          </span>
          <span className="text-xs text-slate-400">2026-07-01</span>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
          AWS CLI Cheat Sheet
        </h1>
        <p className="text-lg text-slate-500 leading-relaxed">
          Every AWS CLI command you use daily. EC2, S3, Lambda, IAM, CloudFormation, RDS,
          and CloudWatch — organized by service with copy-paste examples.
        </p>
      </header>

      {/* Quick Reference */}
      <div className="grid sm:grid-cols-3 gap-3 mb-10">
        {[
          { label: "Services", value: "9" },
          { label: "Commands", value: "80+" },
          { label: "Copy-Paste", value: "All" },
        ].map((stat) => (
          <div
            key={stat.label}
            className="bg-white rounded border border-slate-200 p-4 text-center"
          >
            <div className="text-2xl font-bold text-indigo-600">{stat.value}</div>
            <div className="text-sm text-slate-500">{stat.label}</div>
          </div>
        ))}
      </div>

      {/* Table of Contents */}
      <div className="bg-white rounded border border-slate-200 p-5 mb-10">
        <h2 className="text-sm font-semibold text-slate-900 mb-3 uppercase tracking-wide">
          Table of Contents
        </h2>
        <div className="grid sm:grid-cols-2 gap-1">
          {sections.map((section, i) => (
            <a
              key={section.title}
              href={`#section-${i}`}
              className="text-sm text-indigo-600 hover:text-indigo-700 py-1"
            >
              {section.title}
            </a>
          ))}
        </div>
      </div>

      {/* Sections */}
      <div className="space-y-10">
        {sections.map((section, sectionIdx) => (
          <section key={section.title} id={`section-${sectionIdx}`}>
            <h2 className="text-xl font-bold text-slate-900 mb-4 pb-2 border-b border-slate-200">
              {section.title}
            </h2>
            <div className="space-y-1">
              {section.commands.map((cmd) => (
                <div
                  key={cmd.command}
                  className="bg-white rounded border border-slate-100 p-4 hover:border-slate-200 transition-colors"
                >
                  <code className="block text-sm font-mono text-indigo-600 mb-1 break-all">
                    {cmd.command}
                  </code>
                  <p className="text-sm text-slate-500">{cmd.description}</p>
                  {cmd.example && (
                    <p className="text-xs text-slate-400 mt-1 font-mono">
                      Example: {cmd.example}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>

      {/* Tips */}
      <section className="mt-10 p-6 rounded border border-slate-200 bg-white">
        <h2 className="text-lg font-semibold text-slate-900 mb-4">
          Pro Tips
        </h2>
        <div className="space-y-3">
          <div>
            <h3 className="font-medium text-slate-800 mb-1">
              Use <code className="bg-slate-100 px-1 rounded">--query</code> and{" "}
              <code className="bg-slate-100 px-1 rounded">--output</code> for scripting
            </h3>
            <p>
              <code className="bg-slate-100 px-1 rounded">--output table</code>,{" "}
              <code className="bg-slate-100 px-1 rounded">--output json</code>, or{" "}
              <code className="bg-slate-100 px-1 rounded">--output text</code> to control
              output format. Use <code className="bg-slate-100 px-1 rounded">--query</code>{" "}
              with JMESPath for filtering.
            </p>
          </div>
          <div>
            <h3 className="font-medium text-slate-800 mb-1">
              <code className="bg-slate-100 px-1 rounded">aws help &lt;service&gt;</code> for
              service docs
            </h3>
            <p>
              Run <code className="bg-slate-100 px-1 rounded">aws ec2 help</code> or{" "}
              <code className="bg-slate-100 px-1 rounded">aws s3api help</code> to see all
              available commands for a service.
            </p>
          </div>
          <div>
            <h3 className="font-medium text-slate-800 mb-1">
              <code className="bg-slate-100 px-1 rounded">--dry-run</code> for safety
            </h3>
            <p>
              Use <code className="bg-slate-100 px-1 rounded">--dry-run</code> on EC2 commands
              to test without making actual changes.
            </p>
          </div>
        </div>
      </section>

      {/* Related links */}
      <section className="mt-10 p-6 rounded border border-slate-200 bg-white">
        <h2 className="text-lg font-semibold text-slate-900 mb-4">
          Related Cheat Sheets
        </h2>
        <div className="grid sm:grid-cols-2 gap-3">
          <Link
            href="/blog/docker-cheat-sheet"
            className="text-sm text-indigo-600 hover:text-indigo-700 transition-colors"
          >
            Docker Cheat Sheet →
          </Link>
          <Link
            href="/blog/kubernetes-cheat-sheet"
            className="text-sm text-indigo-600 hover:text-indigo-700 transition-colors"
          >
            Kubernetes Cheat Sheet →
          </Link>
          <Link
            href="/blog/bash-cheat-sheet"
            className="text-sm text-indigo-600 hover:text-indigo-700 transition-colors"
          >
            Bash Cheat Sheet →
          </Link>
          <Link
            href="/blog/python-cheat-sheet"
            className="text-sm text-indigo-600 hover:text-indigo-700 transition-colors"
          >
            Python Cheat Sheet →
          </Link>
        </div>
      </section>

      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "TechArticle",
            headline: "AWS CLI Cheat Sheet — Essential Commands & Examples 2026",
            description:
              "The complete AWS CLI cheat sheet. EC2, S3, Lambda, IAM, CloudFormation, and RDS commands with copy-paste examples.",
            datePublished: "2026-07-01",
            dateModified: "2026-07-01",
            author: {
              "@type": "Organization",
              name: "QuickKit",
            },
            publisher: {
              "@type": "Organization",
              name: "QuickKit",
            },
          }),
        }}
      />
    </div>
  );
}
