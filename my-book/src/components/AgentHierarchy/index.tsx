import React, { useState } from 'react';
import styles from './styles.module.css';

export interface Skill {
  name: string;
  status: 'READY' | 'EXECUTING' | 'LEARNING';
}

export interface Agent {
  id: string;
  name: string;
  status: 'ACTIVE' | 'IDLE' | 'TRAINING';
  subagents?: Agent[];
  skills?: Skill[];
}

interface AgentNodeProps {
  agent: Agent;
  level?: number;
  isLast?: boolean;
}

const StatusBadge: React.FC<{ status: string }> = ({ status }) => {
  const statusClass = status.toLowerCase().replace('_', '-');
  return <span className={`${styles.statusBadge} ${styles[`status${status}`]}`}>[{status}]</span>;
};

const AgentNode: React.FC<AgentNodeProps> = ({ agent, level = 0, isLast = false }) => {
  const [isExpanded, setIsExpanded] = useState(true);
  const hasChildren = (agent.subagents && agent.subagents.length > 0) || (agent.skills && agent.skills.length > 0);

  return (
    <div className={styles.agentNode}>
      <div className={styles.agentInfo}>
        <span className={styles.connector}>
          {level > 0 && (isLast ? '└─' : '├─')}
        </span>
        {hasChildren && (
          <button
            className={styles.expandButton}
            onClick={() => setIsExpanded(!isExpanded)}
            aria-label={isExpanded ? 'Collapse' : 'Expand'}
          >
            {isExpanded ? '▼' : '▶'}
          </button>
        )}
        <span className={styles.agentId}>{agent.id}</span>
        <span className={styles.agentName}>{agent.name}</span>
        <StatusBadge status={agent.status} />
      </div>

      {isExpanded && hasChildren && (
        <div className={styles.children} style={{ marginLeft: level > 0 ? '2rem' : '0' }}>
          {agent.subagents && agent.subagents.map((subagent, index) => (
            <AgentNode
              key={subagent.id}
              agent={subagent}
              level={level + 1}
              isLast={index === agent.subagents!.length - 1 && (!agent.skills || agent.skills.length === 0)}
            />
          ))}
          {agent.skills && agent.skills.map((skill, index) => (
            <div key={skill.name} className={styles.skillNode}>
              <span className={styles.connector}>
                {index === agent.skills!.length - 1 ? '└─' : '├─'}
              </span>
              <span className={styles.skillIcon}>⚙</span>
              <span className={styles.skillName}>{skill.name}</span>
              <span className={`${styles.skillStatus} ${styles[`status${skill.status}`]}`}>
                [{skill.status}]
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

interface AgentHierarchyProps {
  agents: Agent[];
  title?: string;
}

const AgentHierarchy: React.FC<AgentHierarchyProps> = ({ agents, title = 'SYSTEM OVERVIEW' }) => {
  return (
    <div className={`technical-panel ${styles.hierarchyContainer}`}>
      <div className="technical-panel__header">{title}</div>
      <div className={styles.hierarchyTree}>
        {agents.map((agent) => (
          <AgentNode key={agent.id} agent={agent} />
        ))}
      </div>
    </div>
  );
};

export default AgentHierarchy;
